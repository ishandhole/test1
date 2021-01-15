const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var world,engine;	
var bin1;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(150,550,40);
	bin1 = new bins(850,450,100,50);
	bin2 = new bins(980,450,100,50);


	ground = new ground(560,height,1000,20);
	World.add(world,ground)

	var paperObject ={
		isStatic:true
	}

	paperObject = Bodies.circle(150,550,40,40);
	World.add(world,paperObject);
	
	Engine.run(engine);


}


function draw() {
  ellipseMode(CENTER);
  background(0);
 drawSprites();

	Engine.update(engine);
	

 keyPressed();

 paper1.display();
 bin1.display();
 bin2.display();
 ground.display();

 function keyPressed(){
	if(keyCode === UP_ARROW){
		paperObject.circle.applyForce(paperObject.body, paperObject.body.position,85,-85)
	}
}
}

