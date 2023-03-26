const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const data =  fs.readFileSync(`${__dirname}/Userapi/userApi.json`,'utf-8',)
    // req.url();
    if(req.url=='/'){
        res.end("hello This is Home page");
    }
   else if(req.url=='/contact'){
        res.end("<h1>hello This is Contact page</h1>");
    }
   else if(req.url=='/blog'){
        res.end("hello This is Blog page");
    }
   else if(req.url=='/userApi'){
    const orgData = JSON.parse(data)
        res.end(orgData[5].name);
    }
    
    // 404 pages
    else{
        res.writeHead(404,{'Content-type':"text/html"});
        res.end("<h1>404 error! , Page not found</h1>")
    }
})
server.listen('8000','127.0.0.1',()=>{
console.log("listining on server 8000")
})