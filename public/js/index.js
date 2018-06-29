var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'jen@example.com',					//sending to server (2)
  //   text: 'Hey. This is Andrew.'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {   //receiving from server(1)[event listener]
  console.log('newMessage', message);
});
