const express = require("express");
const socket = require("socket.io");
const app = express();

// Static files
app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(3000);

const io = socket(expressServer);

io.on("connection", (socket) => {
  socket.on("messageToServer", (data) => {
    console.log(data);
  });
  socket.emit("messageFromServer", { data: "Hello from server" });
});
