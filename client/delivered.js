'use strict';

module.exports = (socket) => (payload) => {

  setTimeout(() => {
    console.log(`delivered ${payload.order.transactionId},
    NFT ${payload.order.nft}, Rank ${payload.order.rarity}`);
    socket.emit('DELIVERED', payload);
  }, 3000);


};

