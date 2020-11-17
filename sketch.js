
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2;
var boximg,box ,paperImg ;
function preload(){
  boximg =loadImage("box.png");
  paperimg =loadImage("paper.png");
}

function setup() {
	 createCanvas(800, 700);
  box = createSprite(675,600,10,10)
  box.addImage("box",boximg);
  box.scale = 0.3
   engine = Engine.create();
  
	 world = engine.world;

	 paper = new Paper(100, 700, 10);

   
     ground = new Ground(400, 680, 800, 20);
  
	 side0 = new Dustbin(630, 620, 20, 100);
     side1 = new Dustbin(680, 660, 100, 20);
     side2 = new Dustbin(720, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(200);

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  }


