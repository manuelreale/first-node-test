let socket= io();
let myColor ='white';

socket.on('connect', newConnection);

socket.on('mouseBroadcast', drawOtherMouse);

socket.on("color", setColor);

function setColor(assignedColor){
  myColor=assignedColor;
}

function newConnection(){
  console.log('your id: '+socket.id);
}

function drawOtherMouse(data){
  fill(data.color);
  noStroke()
  ellipse(data.x,data.y, 20)
}

function preload(){
  // put preload code here

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background('purple')
}

function draw() {
  // put drawing code here
}

function mouseMoved(){
  push()
  noStroke()
  fill(myColor);
  ellipse(mouseX,mouseY, 20);
  pop()

  let message= {
  x: mouseX,
  y: mouseY,
  color: myColor,
};

socket.emit("mouse", message);

}
