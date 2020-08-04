
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var left,right,bottom
var ball
var ground



function preload()
{

	
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
	
	
	ball = new Ball(200,450,70);
	ground = new Ground(width/2,670, width, 20);
	dustbin= new Dustbin(1200,650);
	}


function draw() {
  rectMode(CENTER);
  background(230);

  ball.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:130, y:-145});
		
	}

}



