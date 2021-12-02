const http = require("http");

// for creating a server
const server = http.createServer();

const io = require("socket.io")(server);

io.on("connection", (socket, request) => {
  // ws.send because socker.io emit
  socket.emit("welcome", { data: "message from backend" });

  socket.on("message", (message) => {
    console.log("message received From FrontEnd", message);
  });
});

server.listen(8080, () => console.log("server started on PORT 8080"));
