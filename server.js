var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/dist/'));

io.sockets.on('connection', function (socket) {
  socket.on('sendMessage', function(message) {
    socket.broadcast.emit('sendMessage', message);
  });
  socket.on('updateSender', function(sender, fingerprint) {
    socket.broadcast.emit('updateSender', sender, fingerprint);
  });
});

server.listen(process.env.PORT || 9000);