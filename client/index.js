'use strict';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3002/ada');

const createTransitOrder = require('./inTransit');
const transitOrder = createTransitOrder(socket);

const createDeliveryOrder = require('./delivered');
const deliverOrder = createDeliveryOrder(socket);

socket.emit('JOIN', 'ada');

socket.on('RECEIVED', transitOrder);
socket.on('TRANSIT', deliverOrder);

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('disconnect', ()=> {
  console.log(socket.id);
});
