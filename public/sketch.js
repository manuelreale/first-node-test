let socket= io();
let myColor ='black';
let pixelSize = 7



socket.on('connect', newConnection);

socket.on('mouseBroadcast', drawOtherMouse);

socket.on("color", setColor);

socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor){
  console.log(newPlayerColor)

//   fill('white')
//   rectMode(CENTER,CENTER);
//   noStroke()
//   rect(width/2,height/2,400,40)
// push()
//   fill(newPlayerColor)
//   textSize(30);
//   textAlign(CENTER,CENTER)
//   text('New player joined: '+ newPlayerColor, width/2,height/2)
//   pop()
}

function setColor(assignedColor){
  myColor=assignedColor;
  createButtons()

}

function newConnection(){
  console.log('your id: '+socket.id);
}

function drawOtherMouse(data){
  fill(data.color);
  noStroke()
  square(pixelSize*floor(data.x/pixelSize),pixelSize*floor(data.y/pixelSize), pixelSize)
}

function preload(){
  img = loadImage('./assets/colors.png');
  // put preload code here
}

var cnv;

function centerCanvas() {
  let scl=windowHeight/1920
  var x = ((windowWidth - width) / 2);
  var y = ((windowHeight - height) / 2)-30*scl;
  cnv.position(x, y);
}

function setup() {
  let scl=windowHeight/1920
  cnv = createCanvas(1200*scl, 800*scl);
  centerCanvas();

  // put setup code here
  background('white')
  createButtons()

//image(img,0,height-50)

}

function draw() {

  // push()
  // noStroke()
  // rectMode(CORNER)
  // fill(myColor)
  // square(0+25,height-50-25,50)
  // pop()
  // put drawing code here
}

function createButtons(){
  let scl=windowHeight/1920
  removeElements()

windowpaint= createImg("./assets/paintwindow.png")
windowpaint.position((windowWidth/2)-(width/2)-126*scl, (windowHeight/2)-(height/2)-83*scl)
windowpaint.style("pointer-events", "none")
windowpaint.size(1338*scl,1009*scl);


  colPic = createColorPicker(myColor);
  colPic.position((windowWidth/2)-(width/2)-73*scl, (windowHeight/2)+(height/2)-5*scl);
  colPic.input(colorPickerSet);
  colPic.size(50,50);

    let padding= 2;
    let posX=(windowWidth/2)-(width/2)-75*scl
    let posY=(windowHeight/2)+(height/2)+70*scl


    translate(windowWidth, windowHeight/2);

    button = createButton("");
    button.mousePressed(color1)
    button.position(posX+50+(25+padding), posY-75);
    button.size(25,25);
    button.style("background-color", "#000000");

    button = createButton("");
    button.mousePressed(color2)
    button.position(posX+50+(25+padding), posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#ffffff");

    button = createButton("");
    button.mousePressed(color3)
    button.position(posX+50+(25+padding)*2, posY-75);
    button.size(25,25);
    button.style("background-color", "#808080");

    button = createButton("");
    button.mousePressed(color4)
    button.position(posX+50+(25+padding)*2, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#C1BEC2");

    button = createButton("");
    button.mousePressed(color5)
    button.position(posX+50+(25+padding)*3, posY-75);
    button.size(25,25);
    button.style("background-color", "#800202");

    button = createButton("");
    button.mousePressed(color6)
    button.position(posX+50+(25+padding)*3, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#FB0204");

    button = createButton("");
    button.mousePressed(color7)
    button.position(posX+50+(25+padding)*4, posY-75);
    button.size(25,25);
    button.style("background-color", "#7D8004");

    button = createButton("");
    button.mousePressed(color8)
    button.position(posX+50+(25+padding)*4, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#FEFE04");

    button = createButton("");
    button.mousePressed(color9)
    button.position(posX+50+(25+padding)*5, posY-75);
    button.size(25,25);
    button.style("background-color", "#018004");

    button = createButton("");
    button.mousePressed(color10)
    button.position(posX+50+(25+padding)*5, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#02FE02");

    button = createButton("");
    button.mousePressed(color11)
    button.position(posX+50+(25+padding)*6, posY-75);
    button.size(25,25);
    button.style("background-color", "#048181");

    button = createButton("");
    button.mousePressed(color12)
    button.position(posX+50+(25+padding)*6, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#04FCFC");

    button = createButton("");
    button.mousePressed(color13)
    button.position(posX+50+(25+padding)*7, posY-75);
    button.size(25,25);
    button.style("background-color", "#010180");

    button = createButton("");
    button.mousePressed(color14)
    button.position(posX+50+(25+padding)*7, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#0201FB");

    button = createButton("");
    button.mousePressed(color15)
    button.position(posX+50+(25+padding)*8, posY-75);
    button.size(25,25);
    button.style("background-color", "#800180");

    button = createButton("");
    button.mousePressed(color16)
    button.position(posX+50+(25+padding)*8, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#FF01FD");

    button = createButton("");
    button.mousePressed(color17)
    button.position(posX+50+(25+padding)*9, posY-75);
    button.size(25,25);
    button.style("background-color", "#7F7F3F");

    button = createButton("");
    button.mousePressed(color18)
    button.position(posX+50+(25+padding)*9, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#FCFD83");

    button = createButton("");
    button.mousePressed(color19)
    button.position(posX+50+(25+padding)*10, posY-75);
    button.size(25,25);
    button.style("background-color", "#063E3F");

    button = createButton("");
    button.mousePressed(color20)
    button.position(posX+50+(25+padding)*10, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#02FD81");

    button = createButton("");
    button.mousePressed(color21)
    button.position(posX+50+(25+padding)*11, posY-75);
    button.size(25,25);
    button.style("background-color", "#037EFC");

    button = createButton("");
    button.mousePressed(color22)
    button.position(posX+50+(25+padding)*11, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#81FEFD");

    button = createButton("");
    button.mousePressed(color23)
    button.position(posX+50+(25+padding)*12, posY-75);
    button.size(25,25);
    button.style("background-color", "#034081");

    button = createButton("");
    button.mousePressed(color24)
    button.position(posX+50+(25+padding)*12, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#7F81FA");

    button = createButton("");
    button.mousePressed(color25)
    button.position(posX+50+(25+padding)*13, posY-75);
    button.size(25,25);
    button.style("background-color", "#4001FD");

    button = createButton("");
    button.mousePressed(color26)
    button.position(posX+50+(25+padding)*13, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#FB0181");

    button = createButton("");
    button.mousePressed(color27)
    button.position(posX+50+(25+padding)*14, posY-75);
    button.size(25,25);
    button.style("background-color", "#7F4005");

    button = createButton("");
    button.mousePressed(color28)
    button.position(posX+50+(25+padding)*14, posY-50+padding);
    button.size(25,25);
    button.style("background-color", "#FD7F42");


}

function colorPickerSet(){
  myColor= colPic.color()
}

function color28(){
  myColor= "#FD7F42"
  createButtons()
}

function color27(){
  myColor= "#7F4005"
  createButtons()
}

function color26(){
  myColor= "#FB0181"
  createButtons()
}

function color25(){
  myColor= "#4001FD"
  createButtons()
}

function color24(){
  myColor= "#7F81FA"
  createButtons()
}

function color23(){
  myColor= "#034081"
  createButtons()
}

function color22(){
  myColor= "#81FEFD"
  createButtons()
}

function color21(){
  myColor= "#037EFC"
  createButtons()
}

function color20(){
  myColor= "#02FD81"
  createButtons()
}

function color19(){
  myColor= "#063E3F"
  createButtons()
}

function color18(){
  myColor= "#FCFD83"
  createButtons()
}

function color17(){
  myColor= "#7F7F3F"
  createButtons()
}

function color16(){
  myColor= "#FF01FD"
  createButtons()
}

function color15(){
  myColor= "#800180"
  createButtons()
}

function color14(){
  myColor= "#0201FB"
  createButtons()
}

function color13(){
  myColor= "#010180"
  createButtons()
}

function color12(){
  myColor= "#04FCFC"
  createButtons()
}

function color11(){
  myColor= "#048181"
  createButtons()
}

function color10(){
  myColor= "#02FE02"
  createButtons()
}

function color9(){
  myColor= "#018004"
  createButtons()
}

function color8(){
  myColor= "#FEFE04"
  createButtons()
}

function color7(){
  myColor= "#7D8004"
  createButtons()
}

function color6(){
  myColor= "#FB0204"
  createButtons()
}

function color5(){
  myColor= "#800202"
  createButtons()
}

function color4(){
  myColor= "#C1BEC2"
  createButtons()
}

function color3(){
  myColor= "#808080"
  createButtons()
}

function color2(){
  myColor= "#ffffff"
  createButtons()
}

function color1(){
  myColor= "#000000"
  createButtons()
}

function mouseDragged(){
  push()
  noStroke()
  fill(myColor);
  square(pixelSize*floor(mouseX/pixelSize),pixelSize*floor(mouseY/pixelSize), pixelSize);
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
  square(pixelSize*floor(mouseX/pixelSize),pixelSize*floor(mouseY/pixelSize), pixelSize);
  pop()

  let message= {
  x: mouseX,
  y: mouseY,
  color: myColor,
};
socket.emit("mouse", message);
}

function windowResized() {
  let scl=windowHeight/1920
  createButtons()
  centerCanvas();
  resizeCanvas(1000*scl, 800*scl);
  //background("white")
}
