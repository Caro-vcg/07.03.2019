var ball = [];

function setup() {
  createCanvas(400, 400);
 for(var i = 0; i < 500; i++){
  ball[i] = new Ball();
 }
}

function draw() {
  background(220);
  
  for(var i = 0; i < 500; i++){
    ball[i].mostrar();
  ball[i].moverx();
		 ball[i].movery();
		
	
		if(ball[i].salirx()) {
		ball[i].botarx();
		


	}
	if (ball[i].saliry()) {
		ball[i].botary();
		
		
		
		
		
    }
  }
}





class Ball {
	constructor() {
		this.x = random(25, 375);
		this.y = random(25, 375);
		this.tam = 50;
		this.velx = random(1,10);
		this.vely = random(1,15);
		this.r = random(0,255);
		this.b = random(0,255);
		this.g=  random(0,255);

	}
	mostrar() {
		fill(this.r,this.g,this.b);
		ellipse(this.x, this.y, this.tam, this.tam);

	}
	moverx() {
		this.x = this.x + this.velx;

	}
	salirx() {
		var res;
		if (this.x < 25 || this.x > 375) {
			res = true;
		} else {
			res = false;
		}
		return res;
	}
	botarx() {
		this.velx = this.velx * -1;
		this.r = random(0,255);
		this.b = 200;
		this.g=  random(0,255);

	}
	movery() {
		this.y = this.y + this.vely;

	}
	saliry() {
		var res;
		if (this.y < 25 || this.y > 375) {
			res = true;
		} else {
			res = false;
		}
		return res;
	}
	botary() {
		this.vely = this.vely * -1;
		this.r = random(0,255);
		this.b = random(0,255);
		this.g=  random(0,255);

	}
	
}
