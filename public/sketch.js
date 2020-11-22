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
  button.mousePressed(color1)
  button.position(50+25, height-50-25);
  button.size(25,25);
  button.style("background-color", "#000000");

  button = createButton("");
  button.mousePressed(color2)
  button.position(50+25, height-25-25);
  button.size(25,25);
  button.style("background-color", "#ffffff");

  button = createButton("");
  button.mousePressed(color3)
  button.position(50+25+25, height-50-25);
  button.size(25,25);
  button.style("background-color", "#808080");

  button = createButton("");
  button.mousePressed(color4)
  button.position(50+25+25, height-25-25);
  button.size(25,25);
  button.style("background-color", "#C1BEC2");

  button = createButton("");
  button.mousePressed(color5)
  button.position(50+25*3, height-75);
  button.size(25,25);
  button.style("background-color", "#800202");

  button = createButton("");
  button.mousePressed(color6)
  button.position(50+25*3, height-50);
  button.size(25,25);
  button.style("background-color", "#FB0204");

  button = createButton("");
  button.mousePressed(color7)
  button.position(50+25*4, height-75);
  button.size(25,25);
  button.style("background-color", "#7D8004");

  button = createButton("");
  button.mousePressed(color8)
  button.position(50+25*4, height-50);
  button.size(25,25);
  button.style("background-color", "#FEFE04");

  button = createButton("");
  button.mousePressed(color9)
  button.position(50+25*5, height-75);
  button.size(25,25);
  button.style("background-color", "#018004");

  button = createButton("");
  button.mousePressed(color10)
  button.position(50+25*5, height-50);
  button.size(25,25);
  button.style("background-color", "#02FE02");

}

function draw() {
  push()
  noStroke()
  rectMode(CORNER)
  fill(myColor)
  square(0+25,height-50-25,50)
  pop()
  // put drawing code here
}

function color8(){
  myColor= "#02FE02"
}

function color7(){
  myColor= "#018004"
}

function color8(){
  myColor= "#FEFE04"
}

function color7(){
  myColor= "#7D8004"
}

function color6(){
  myColor= "#FB0204"
}

function color5(){
  myColor= "#800202"
}

function color4(){
  myColor= "#C1BEC2"
}

function color3(){
  myColor= "#808080"
}

function color2(){
  myColor= "#ffffff"
}

function color1(){
  myColor= "#000000"
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
