const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const mongoose = require("mongoose");
const router = require("./routes/index");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const server = http.createServer(app);
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, 
  })
);
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://abhoygorai:adminadmin@cluster0.ba7zsx7.mongodb.net/crowdscape?retryWrites=true&w=majority"
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, 
  },
});

app.use(morgan("tiny"));

io.on("connection", (socket) => {
  console.log("Connection is made: ", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User with ID: " + socket.id + " joined the room: " + data);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected " + socket.id);
  });
});

app.use("/api/v1", router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log("server running in port " + PORT));
