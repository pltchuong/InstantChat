var grunt = require('grunt'),
    io = grunt.cli.tasks[0] == 'serve' ? grunt.config.data.connect['livereload'].socketio : grunt.config.data.connect['dist'].socketio;

io.sockets.on('connection', function (socket) {
  
  socket.on('sendMessage', function(message) {
    socket.broadcast.emit('sendMessage', message);
  });
  
  socket.on('updateSender', function(sender, fingerprint) {
    socket.broadcast.emit('updateSender', sender, fingerprint);
  });
  
});
