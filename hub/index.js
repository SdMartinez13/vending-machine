'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const io = new Server(PORT);

//Creating namespace
const ada = io.off('/ada');

// Connect to server
io.on('connection', (socket) => {
  console.log('Socket connected to Non-FUNGIBLE TOKEN HUB!', socket.id);

});

ada.on('connection', (socket) => {
  console.log('Connected to ada namespace', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You have entered the ${room} room`);
  });

  socket.on('PICKUP', (payload) => {
    eventLogger('PICKUP', payload);
    ada.emit('PICKUP', payload);

  });

  socket.on('TRANSIT', (payload) => {
    eventLogger('TRANSIT', payload);
    ada.emit('TRANSIT', payload);
  });

  socket.on('DELIVERY', (payload) => {
    eventLogger('DELIVERY', payload);
    ada.emit('DELIVERY', payload);
  });

});

function eventLogger(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', { event, time, payload });
}
