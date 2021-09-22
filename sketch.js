const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ground

var box1,box2,box3,box4,box5

var pig1,pig2
var log1,log2,log3,log4
var bird


function setup() {
  createCanvas(1200,400);
  //creating engine
  engine=Engine.create()
  //when the engine is created automatically a world is also created called as engine.world
  world=engine.world
//in physics engine gravity property is known as isStatic
ground=new Ground(600,height,1200,20)
//creating objects
//bottom layer
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
pig1=new Pig(810,350)
log1=new Log(810,260,300,PI/2)//degrees-radiants.

//middle layer
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
pig2=new Pig(810,220)
log2=new Log(810,180,300,PI/2)

//TOP LAYER
box5=new Box(810,160,70,70)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
bird=new Bird(100,100)
}

function draw() {
  //updating the physics engine
  Engine.update(engine)
  background(0);  
  
 //displaying the objects
 box1.display()
 box2.display()
 ground.display()
pig1.display()
log1.display()
bird.display()
box3.display()
box4.display()
box5.display()
log2.display()
log3.display()
log4.display()
pig2.display()
}