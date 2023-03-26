const fs = require('fs')
const bioData ={
    name:"Vikash Kumar",
    age:"21",
    education:"B-tech"
}

const jsonData = JSON.stringify(bioData)
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("write sucess");
})
fs.readFile('json1.json','utf-8',(err,data)=>{
    const objData = JSON.parse(data)
    console.log(data);
    console.log(objData);
})
// console.log(jsonData);