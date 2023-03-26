const fs = require('fs')
const { createServer } = require('http')

const server = createServer();

server.on('request',(req,res)=>{
    // fs.readFile('input.txt','utf-8',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data)
    // })
                        //    2nd way
    const resStream = fs.createReadStream('input.txt');
    // resStream.on('data',(chunkData)=>{
    //    res.write(chunkData);
    // })
    // resStream.on('end',()=>{
    //     res.end();
    // })
    // resStream.on('error',(err)=>{
    //    console.log(err);
    //    res.end("this page is not Found")
    // })

                 //      3rd way
resStream.pipe(res);
})
server.listen(8000,"127.0.0.1");