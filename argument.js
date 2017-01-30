

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(51);
  flower(300,200,80);
  flower(100,100,50);
  
}


function flower(x , y , place){
	fill(255,0,255);
  noStroke();
  rect(x-10,y,20,100);
  
  fill(255,0 ,0);
  ellipse(x,y,place,place);
}


function back(){


	return true
}