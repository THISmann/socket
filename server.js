 
//=============================================================================
//   DECLARE ALL THE VARIABLE FOR THE Applications 
//============================================================================= 
 
const express = require('express'); 
const app = express();
const server = app.listen(3000,console.log("Socket.io Hello World server started!"));
const io = require('socket.io')(server);
var data = {
    name: 'etienne',
    prenom: 'fuh',
    data: '11-12-2022'
};
//=============================================================================
//  ROUTAGE FOR THE APP 
//============================================================================= 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//=============================================================================
// INITIALIZE THE SOCKET 
//=============================================================================

io.on('connection', (socket) => {
    console.log("Client connected!"); 
 
    socket.on('disconnect', socket => {
        console.log("user  disconneted ")
    })
 
    socket.on('chat', function(msg){
        console.log('message recu : ' + msg);
        io.emit('chat' , msg);
    })

    socket.on('data' , (data) => {
        io.emit('data', data);
    })
    
})

 
