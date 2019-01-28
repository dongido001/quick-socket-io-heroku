var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use(express.static('public'));

http.listen(3000, function() {
    console.log('listening on *:' + 3000);
});

io.on('connection', function(socket) {
    socket.on('toggleRmoteMuteAudio', function(data) {
        io.emit('toggleRmoteMuteAudio', data);
    });
    socket.on('connect', function () {
        console.log('connection established');
    });
    socket.on('disconnect', function() {
        console.log('connection closed');
    });
});