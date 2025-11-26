
const initializeSocketIO = (io) => {
    io.on("connection", (socket) => {
        console.log("User connected : ", socket.id);

        socket.on("title_click", (data) => {
            console.log('title clicked', data);
            socket.broadcast.emit("receive_title_click", data);
        });

    });
}

module.exports = initializeSocketIO;