const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newMessage', {
  //   from: 'Kalp',           //sending to client (1)
  //   text: 'Hey. What is going on.',
  //   createAt: 123
  // });

  socket.on('createMessage', (message) => {      //receiving from client (2)
    console.log('createMessage', message);
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createAt:new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});


