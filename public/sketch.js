let socket= io();
let myColor ='white';

socket.on('connect', newConnection);

socket.on('mouseBroadcast', drawOtherMouse);

socket.on("color", setColor);

socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor){
  console.log(newPlayerColor)

  fill('purple')
  rectMode(CENTER,CENTER);
  noStroke()
  rect(width/2,height/2,400,40)
push()
  fill(newPlayerColor)
  textSize(30);
  textAlign(CENTER,CENTER)
  text('New player joined: '+ newPlayerColor, width/2,height/2)
  pop()
}

function setColor(assignedColor){
  myColor=assignedColor;

}

function newConnection(){
  console.log('your id: '+socket.id);
}

function drawOtherMouse(data){
  fill(data.color);
  noStroke()
  square(data.x,data.y, 20)
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
  square(5*ceil(mouseX/5),5*ceil(mouseY/5), 5);
  pop()

  let message= {
  x: mouseX,
  y: mouseY,
  color: myColor,
};

socket.emit("mouse", message);

}
