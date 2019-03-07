var img;
var r;

function preload() {
  img = loadImage('pickle-rick.png');
}

function setup() {
  createCanvas(400, 400);
  r = new Rick();
}

function draw() {
  background(220);
  r.mostrar();
  
  if(keyIsPressed && keyCode == RIGHT_ARROW){
    r.derecha();
  }
  
  if(keyIsPressed && keyCode == LEFT_ARROW){  
  r.izquierda();
  }
  
  if(keyIsPressed && keyCode == UP_ARROW){
    r.arriba();
  }
  
  if(keyIsPressed && keyCode == DOWN_ARROW){
    r.abajo();
  }
  
}
       
       
       class Rick {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vel = 20;
  }

  mostrar() {
    imageMode(CENTER);
    image(img, this.x, this.y, 300, 300);
  }

  derecha() {
    
    this.x = this.x + this.vel;
  }

  izquierda() {
   
    this.x = this.x - this.vel;                                 
  }

  arriba(){
    
    this.y = this.y - this.vel;
  }
  
  abajo(){
  
    this.y = this.y + this.vel;
  }

}



