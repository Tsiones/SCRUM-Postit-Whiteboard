var postItModel = require('../models/application');

module.exports = function (http) {
  var io = require('socket.io')(http);
  io.on('connection', (socket) => {
    socket.emit('todo-update', postItModel.getAll());
  });

  // Listen to model changes and broadcast to everyone
  postItModel.on('updated', (items) => {
    io.sockets.emit('todo-update', items);
  });
};
