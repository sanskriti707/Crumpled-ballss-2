
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin,engine,world;



function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	paper=new Paper(50,50,20);
	ground= new Ground(width/2,380,width,20);
	dustbin= new Dustbin(500,250);



	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
   
  paper.display();
 ground.display();
 dustbin.display();
}



