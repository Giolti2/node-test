console.log("script loaded")

let express = require("express")
let serverSocket = require("socket.io")

let app = express();

let port = 3000;

let server = app.listen(port);
let io = serverSocket(server);

io.on("connection", newConnection)

app.use(express.static("public"));

console.log("running server on http://localhost:" + port)

function newConnection(newSocket) {
    console.log(newSocket.id)
}

