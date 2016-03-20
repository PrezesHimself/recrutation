var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log('connection')
  socket.emit('news', { hello: 'world' });
  socket.on('news', function (data) {
  	console.log('news', data);
    socket.broadcast.emit('news', data);
  });
});