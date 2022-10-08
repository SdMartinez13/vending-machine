'use strict';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3002/ada');

const {Chance} = require('chance');

const chance = new Chance();

socket.emit('JOIN', 'ada');

socket.on('connect', () => {
  console.log(socket.id);

  setInterval(() => {
    const order = {
      nft: 'Tiny Dino\'s',
      rarity: chance.integer({ min: 1, max: 10000 }),
      transactionId: chance.guid({version: 4}),
      walletAddress: chance.hash(),
    };
    console.log('|------------------New Order Received-----------------------|');
    socket.emit('PICKUP', { order });

  }, 9000);


});

socket.on('disconnect', () => {
  console.log(socket.id);
});

