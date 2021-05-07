const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
  //monsterImage = loadAnimation("monster1.png","monster2.png");

}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(350,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(670, 100, 70, 70);
  box2 = new Box(880, 200, 70, 70);
  box3 = new Box(880, 300, 70, 70);
  box4 = new Box(880, 100, 70, 70);

  box5 = new Box(670, 100, 70, 70);
  box6 = new Box(740, 200, 70, 70);
  box7 = new Box(810, 100, 70, 70);
  box8 = new Box(740, 100, 70, 70);

  box9 = new Box(670, 300, 70, 70);
  box10 = new Box(740, 400, 70, 70);
  box11 = new Box(810, 300, 70, 70);
  box12= new Box(740, 400, 70, 70);

  box13 = new Box(810, 500, 70, 70);
  box14 = new Box(810, 200, 70, 70);
  box15 = new Box(810, 400, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  hero.display();
  rope.display();
  monster.display();
  //image(monsterImage, monster.body.position.x,0,this.r, this.r);

}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}