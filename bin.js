class bins {
    constructor(x, y,height, angle) {
      var options = {
          'restitution':0.8,
          'friction':4,
          'density':1.0,  
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, 100, height, options);
      this.width = 20 ;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  