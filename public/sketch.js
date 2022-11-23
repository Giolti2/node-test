let clientSocket = io();

let mouses = []
let color;

clientSocket.on("connect", newConnection)
clientSocket.on("mouseBroadcast", mouseReceived)

function setup() {
  createCanvas(400, 400);
  background(220);

  color = {
    r: random(255),
    g: random(255),
    b: random(255)
  }
}

function draw() {

  background(230)

  mouses.forEach(function (mouse) {
    push()

    fill(mouse.color.r, mouse.color.g, mouse.color.b)
    circle(mouse.x, mouse.y, 20)

    pop()
  })
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    color: color,
    id: clientSocket.id
  };

  clientSocket.emit("mouse", message)
}

function newConnection() {
  console.log(clientSocket.id)
}

function mouseReceived(data) {
  let missing = true;

  for (let i = 0; i < mouses.length; i++){
    if (mouses[i].id == data.id) {
      mouses[i] = data;
      missing = false;
      break;
    }
  }

  if (missing) {
    mouses.push(data);
  }
}