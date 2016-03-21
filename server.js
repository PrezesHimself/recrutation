var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337);

io.on('connection', function (socket) {
    console.log('connection')
    socket.emit('message', {
        message: "hello new user",
        user: "server"
    });
    socket.on('message', function (data) {
        console.log('message', data);
        io.emit('message', data);
    });
});