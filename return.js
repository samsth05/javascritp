var bubble = {
	xspeed: 3,
	yspeed: -4,
	x: 300,
	y: 150,
	display:function(){
		fill(255,0,0);
		stroke(255);
		strokeWeight(5);
		ellipse(this.x, this.y , 30 ,30);

	},
	move:function(){

		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

	},
	bounce:function(){

		if(this.x > width || this.x < 0){
			this.xspeed = this.xspeed * -1;
		}
		if (this.y > height || this.y < 0) {

			this.yspeed = this.yspeed * -1;
		}

	}
}


function setup(){
	createCanvas(600,400);

}


function draw(){
	background(51);
	bubble.display();
	bubble.move();
	bubble.bounce();
	
	
}






