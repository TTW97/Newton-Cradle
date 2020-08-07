class Bob {
    constructor(x, y, radius) {
      var options = {
  
          isStatic: false,
          'restitution':1,
          'friction':0,
          'density':0.5
      } 

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
  
      
  
      push();
  
      
  
      rectMode(CENTER);
  
      fill("purple");
  
      circle(pos.x, pos.y, this.radius);

      pop();
  
    }
  }
  