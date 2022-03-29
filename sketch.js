
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var engine
var world
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var plane_options={
		isStatic:true
	
	}
	chao=Bodies.rectangle(400,650,800,10,plane_options)
	World.add(world,chao)
var block1_options= {

restitution:0.1,
friction:0.02,
frictionAir:0



}
var block2_options= {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1,
	
}
var block3_options={
	restitution:0.1,
	friction:1,
	frictionAir:0.3
}

	//Crie os Corpos Aqui.

block1=Bodies.circle(220,10,100,block1_options);

World.add(world,block1)
block2=Bodies.rectangle(110,50,100,100,block2_options)
World.add(world,block2)
block3=Bodies.rectangle(350,50,100,100,block3_options);
World.add(world,block3)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("Royalblue");
ellipse(block1.position.x,block1.position.y,100,100)
rect(block2.position.x,block2.position.y,100,100)
rect(block3.position.x,block3.position.y,100,100)
rect(chao.position.x,chao.position.y,800,10)


  Engine.update(engine)
  drawSprites();
 
}



