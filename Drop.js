class Drop{
    constructor(x,y,radius){

    this.body = Bodies.circle(x,y,radiusX,radiusY);
    World.add(world,this.body)    
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}

