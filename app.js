let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app.html');
});

io.on('connection', (socket) => {
    socket.on('start', (msg) => {
        io.emit('event', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log('listening on *:'+PORT);
});
