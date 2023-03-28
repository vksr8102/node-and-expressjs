const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialPath)
app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
// app.get("*",(req,res)=>{
//     res.render("404",{
//         errormemnt:" Oops Page Couldn't found  "
//     })
// })
          //built in module
app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.send("<h1 >Hello world This  is express backend website</h1>")
})

app.listen(8000,()=>{
    console.log("listing on port 8000");
})