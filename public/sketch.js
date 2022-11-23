let clientSocket = io();

clientSocket.on("connect", newConnection)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 30, 2)
}

function newConnection() {
  console.log(clientSocket.id)
}