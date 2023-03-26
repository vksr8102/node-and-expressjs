
const express = require('express')
const app = express()
let PORT = 5000;
const sendMail = require("../controller/sendMail")
 app.get('/',(req,res)=>{
    res.send("This is my server")
 })
 app.get('/mail',sendMail)
 const start = async()=>{
    try {
       app.listen(PORT,()=>{
           console.log(`I am live on port no ${PORT}`);
       }) 
    } catch (error) {
       console.log(error); 
    }
 }
 start();