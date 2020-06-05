var drop = [];

function setup() {
  createCanvas(800,400);

  for(var i = 0;i<200;i++){
    drop[i] = new Drop()
  }
}

function draw() {
  background(255,255,255);  
  for(var i = 0;i<200;i++){
    drop[i].show();
    drop[i].update();
}
function Drop(){
  this.x = random(0,width);
  this.y = random(0,height);

  function show(){

    fill(0);
    ellipse(this.x,this.y,2,10)
  }
}
  function update(){

    this.y = this.y + 8;
  
    if(this.y>height){
      this.y = random(0,height);
    }
  }


  }
