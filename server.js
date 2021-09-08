const express = require('express'); 
const app = express();
const server = app.listen(3000,console.log("Socket.io Hello World server started!"));
const io = require('socket.io')(server);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log("Client connected!"); 
    
    socket.on('disconnect', socket => {
        console.log("user  disconneted ")
    })
 
    socket.on('chat', function(msg){
        console.log('message recu : ' + msg);
        io.emit('chat' , msg);
    })
})

 
