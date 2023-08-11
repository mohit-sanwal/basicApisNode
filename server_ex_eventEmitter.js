const express = require('express');
const EventEmitter = require('events');

const app = express();

const event = new EventEmitter();

let count = 0;

event.on("countAPI", ()=> {
    count++;
    console.log("event called");
})

app.get("/", (req, resp)=> {
    resp.send('api called');
    event.emit("countAPI")
})


app.get("/", (req, resp)=> {
    resp.send('api called')
})


app.listen(5000);


















// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.platform());
