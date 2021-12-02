const http = require("http");
const websocket = require("ws");

const server = http.createServer((req, res) => res.end("server connected"));

const wss = new websocket.Server({ server });

wss.on("headers", (header, request) => {
  console.log("headers", header);
});

wss.on("connection", (socket, request) => {
  console.log("socket", socket);
  socket.send("hello connected!!");
  socket.on("message", (message) => {
    console.log("message received from front-end:-", message.toString());
  });
});

server.listen(8080);
