const EventEmitter = require('events')
const event = new EventEmitter();
event.on('checkPage',(sc,msg)=>{
    console.log(`My Source code is ${sc} and page is ${msg}`);
})
// event.on('sayMyName',()=>{
//     console.log("My sirname is Kumar");
// })
// event.on('sayMyName',()=>{
//     console.log("My fathername is Ramanand prrasad");
// })
// event.emit('sayMyName',);
event.emit('checkPage',200,'ok');