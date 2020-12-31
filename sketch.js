
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1
var part2
var part3
var paper
var floor
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	part1=new Center(453,653,7,100)
	part2=new Center(523,695,150,7)
	part3=new Center(594,652.5,7,100)
	paper=new Paper(100,653,7,7)
	floor=new Ground();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  part1.display();
  part2.display();
  part3.display();
  paper.display();
  floor.display ();
 
  
  
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1.9,y:-1.3});
		console.log('Avishka')


	}
}



