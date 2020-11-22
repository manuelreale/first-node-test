let socket= io();
let myColor ='black';

socket.on('connect', newConnection);

socket.on('mouseBroadcast', drawOtherMouse);

socket.on("color", setColor);

socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor){
  console.log(newPlayerColor)

  fill('white')
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
  square(10*floor(data.x/10),10*floor(data.y/10), 10)
}

function preload(){
  // put preload code here

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background('white')


  button = createButton("");
  button.mousePressed(myColor= "#000000")
  button.position(50, height-50);
  button.size(25,25);
  button.style("background-color", "#000000");

}

function draw() {
  push()
  noStroke()
  rectMode(CORNER)
  fill(myColor)
  square(0,height-50,50)
  pop()
  // put drawing code here
}



function mouseDragged(){
  push()
  noStroke()
  fill(myColor);
  square(10*floor(mouseX/10),10*floor(mouseY/10), 10);
  pop()

  let message= {
  x: mouseX,
  y: mouseY,
  color: myColor,
};
socket.emit("mouse", message);
}


function mouseClicked(){
  push()
  noStroke()
  fill(myColor);
  square(10*floor(mouseX/10),10*floor(mouseY/10), 10);
  pop()

  let message= {
  x: mouseX,
  y: mouseY,
  color: myColor,
};
socket.emit("mouse", message);
}
