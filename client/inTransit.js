'use strict';

module.exports = (socket) => (payload) => {

  setTimeout(() => {
    console.log(`in transit ${payload.order.transactionId}`);
    socket.emit('TRANSIT', payload);
  }, 3500);

};
