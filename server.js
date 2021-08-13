// const express = require('express')
// const app = express()
// const port = 3000
// const socketio = require('socket.io') 
// const server = app.listen(3000,console.log("Socket.io Hello World server started!"));
// const io = require('socket.io')(server);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// // app.listen(port, () => {
// //   console.log(`Example app listening at http://localhost:${port}`)
// // })

// app.get('/test' , (req , res)=> {
//     res.send("I Love you");

//     io.on('connection', (socket) => {
//         //console.log("Client connected!");
//         socket.on('message-from-client-to-server', (msg) => {
//             console.log(msg);
//         })
//         socket.emit('message-from-server-to-client', 'Hello World!');
//     });

// })

// app.get('/like', (req , res)=>{ 
//     res.send('bonjour etienne fuh');
//     console.log('hello dear !');
// })

// app.get('/file', (req , res)=>{
//     res.sendFile(__dirname + '/index.html');
// })

// app.post('/envoi' ,(req , res)=> {
//     res.sendFile(__dirname + '/form.html');
// })


const express = require('express'); 
const app = express();
const server = app.listen(3000,console.log("Socket.io Hello World server started!"));
const io = require('socket.io')(server);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log("Client connected!");
    // socket.on('message-from-client-to-server', (msg) => {
    //     console.log(msg);
    socket.on('disconnect', socket => {
        console.log("user  disconneted ")
    })
 
    socket.on('chat', function(msg){
        console.log('message recu : ' + msg);
        io.emit('chat' , msg);
    })
})

 