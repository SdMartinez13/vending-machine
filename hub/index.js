'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const io = new Server(PORT);

//Creating namespace
const ada = io.of('/ada');

// Connect to server
io.on('connection', (socket) => {
  console.log('Socket connected to Non-FUNGIBLE TOKEN HUB!', socket.id);

});

ada.on('connection', (socket) => {
  console.log('Connected to ada namespace', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You have entered the ${room} room`);
  });

  socket.on('RECEIVED', (payload) => {
    eventLogger('RECEIVED', payload);
    ada.emit('RECEIVED', payload);

  });

  socket.on('TRANSIT', (payload) => {
    eventLogger('TRANSIT', payload);
    ada.emit('TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    eventLogger('DELIVERED', payload);
    ada.emit('DELIVERED', payload);
  });

});

function eventLogger(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', { event, time, payload });
}


