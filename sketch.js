
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var dustbin1,dustbin2,dustbin3;
var ground;
var crumple;
var dustbin,dustbinImg


function preload()
{
  dustbinImg=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(1050, 450);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
  dustbin=createSprite(775,325)
  dustbin.scale=0.5
  dustbin.addImage(dustbinImg);
  
  dustbin1=new Dustbin(775,400,110,5);
	dustbin2=new Dustbin(722,335,5,145);
	dustbin3=new Dustbin(830,335,5,145);
	ground  =new Ground(500,420,1100,20);
  paper   =new Papper(150,110,50,50);
  launch=new Launcher(paper.body,{x:150,y:110})
  
   

  

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("pink");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground  .display();
  paper .display();
  launch.display();
 
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    launch.fly()
  
  }
  
  