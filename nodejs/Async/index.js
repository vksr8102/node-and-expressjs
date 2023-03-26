const fs = require('fs')

// fs.writeFile('async.txt','This is Async way of write the File',(err)=>{
//     console.log("sucess");
// })
// fs.appendFile('async.txt',"This is async append method",()=>{
//     console.log(" append sucess");
// })
// fs.readFile('async.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.mkdir("vkasync",(err)=>{
//     console.log("folder created");
// })
fs.writeFile('bio.txt',"text file",()=>{
    console.log("file created");
})