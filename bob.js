class Bob {
    constructor(x, y, radius) {
      var options = {
  
          isStatic: false,
          'restitution':1,
          'friction':0,
          'density':1
      } 
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
  
      var angle = this.body.angle;
  
      push();
  
      rotate(angle);
  
      rectMode(CENTER);
  
      fill("purple");
  
      circle(pos.x, pos.y, 70,70);

      pop();
  
    }
  }
  