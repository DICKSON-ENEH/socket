// const express = require("express")
// const port = 1234
// const app = express()
// const http =  require("http")
// const server = http.createServer(app)
// const {Server} = require("socket.io")

// const io = new Server(server, {cors:{
//     origin:"*",
//     method:["GET", "POST"]
// }})
// app.use(express.json())
// app.get("/", (req, res)=>{
//     res.json({
//         message:"welcome . socket io"
//     })
// })
// io.on("connection", (socket)=>{
//     console.log(socket)
// })

// app.listen( port, ()=>{
//     console.log(
//         "listenig to port", port
//     )
// })

const express = require('express');
const mongoose = require("mongoose")
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 4000
mongoose.connect("mongodb+srv://oja:today@cluster0.xd5wm.mongodb.net/socket?").then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log(error)
})

const db = mongoose.connection
watch
db.on("open", ()=>{
 const observer =   db.collection('user').watch()

 observer.on('change', (change)=>{
    if(change.operationType === 'insert'){
        
    }
 })

    

} )

const { Server } = require("socket.io");
const io = new Server(server, {cors:{
    origin:"*"
}, pingTimeout:9000});
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
app.use(express.json())
app.use("/api", (require("./allFiles/router")))
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on("disconnect", ()=>{
        console.log("user disconnected")
    })
  });
server.listen(port, () => {
  console.log('listening on port', port);
});