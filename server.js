var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(1337, "192.168.0.11" , function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});


var titles = ['mr ', 'dr ', 'prof ', 'mrs ', 'mighty', 'sir', 'lord', 'lady', 'count'];
var vegetable = ['carrot', 'cauliflower', 'potato', 'aubergine', 'onion'];
var pseudo = ['head', 'eater', 'master', 'fan', 'lover', 'analyst', 'eye', 'feet'];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function createNewName() {
    var title = shuffle(titles)[0];
    var name = shuffle(vegetable)[0] + shuffle(pseudo)[0];
    return title + " " + name;
}

io.on('connection', function (socket) {
  console.log('connection');
    socket.emit('greeting', {
        message: "hello new user",
        user: "server",
        newUserName: createNewName(),
        socketID: socket.id
    });
    socket.on('message', function (data) {
        data.socketID = socket.id;
        io.emit('message', data);
    });
});
