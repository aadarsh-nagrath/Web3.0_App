const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");
const { Socket } = require("dgram");

const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("Connection is made: ", socket.id);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log("User with ID: " + socket.id + " joined the room: " + data);
    })

    socket.on("send_message", (data) => {
        console.log(data)
        socket.to(data.room).emit("receive_message", data);
    })

    socket.on("disconnect", () => {
        console.log("user disconnected " + socket.id);
    })
})

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log("server running in port " + PORT));