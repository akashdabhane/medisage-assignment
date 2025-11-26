const app = require('./app.js');
const initializeSocketIO = require('./index.socket.js')
const http = require('http');
const { Server } = require('socket.io');

// http server holding express js instance
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST", 'PUT', "UPDATE", "DELETE"],
    },
});

// running socket.io
initializeSocketIO(io);

const PORT = 8000;
server.listen(PORT, () => {
    console.log('server is running on port', PORT);
});