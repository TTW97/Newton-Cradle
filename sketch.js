
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constra = Matter.Constraint;

var roof;

var bobObject2, bobObject3, bobObject4, bobObject5, bobObject1;

var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,400,20);

	bobObject1 = new Bob(280,400,25);
	bobObject2 = new Bob(340,400,25);
	bobObject3 = new Bob(400,400,25);
	bobObject4 = new Bob(460,400,25);
	bobObject5 = new Bob(520,400,25);

	rope1 = new Chain(bobObject1.body, roof.body, -100 , 0);
	rope2 = new Chain(bobObject2.body, roof.body, -50 , 0);
	rope3 = new Chain(bobObject3.body, roof.body, 0 , 0);
	rope4 = new Chain(bobObject4.body, roof.body, 50 , 0);
	rope5 = new Chain(bobObject5.body, roof.body, 100 , 0);



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background("white");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  keyPressed();

  
  drawSprites();
 
}

function keyPressed() {

	if (keyDown(UP_ARROW)) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-10,y:-10});

	}



}




