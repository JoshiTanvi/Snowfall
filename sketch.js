const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bgImg;
var engine;
var snows = [];

function preload(){
  bgImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bgImg);  
  if(frameCount%50===0){
    snows.push(new Snow(random(0,1200),0,10,10));
  }
  for(var i=0;i>snows.length;i++){
    snows[i].display();
  }
  drawSprites();
}