const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var gd; 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(100,50,50,100);
    box3 = new Box(13,45,21,34);
    
    gd = new Ground(200,290,400,10);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    gd.display();

}