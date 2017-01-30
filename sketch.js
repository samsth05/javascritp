
var x = 400; 
var y = 300;

var speedx = 3;
var speedy = -4;

function setup() {
  createCanvas(600,400);
  
}

function draw() {
  background(0);
  display();
  move();
  bounce();
  
}

function display(){
//display the ellipse
  fill(255);
  noStroke();
  ellipse(x,y,50,50);
  
  
}
function move(){
// moving the ellispe
    x  = x + speedx;
    y = y + speedy;
  
}
function bounce(){
//bouncing the ellipse
if(x > width || x < 0 ){
  
  speedx = speedx * -1;
  
}

if(y > height || y < 0 ){
  
  speedy = speedy * -1;
  
}
}