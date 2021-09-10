const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg;
var snow=[];
var snow1img,snow2img;

function preload(){
  bgimg=loadImage("snow3.jpg");
  //snow1img=loadImage("snow4.webp");
  //snow2img=loadImage("snow5.webp");
}
function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      // Choose correct code to create and save snow object
      //snow.push(new createSnow(random(0,800), random(0,800)));
      //snow.pop(new createSnow(random(0,800), random(0,800)));
    }

  }
 

}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  // Choose the correct for loop
  //1.
  //for(var i = 0; i<200; i++){
  //      snow[i].showDrop();
   //     snow[i].updateY()
  //}

  //2.
  //for(i<200; i++){
  //  snow[i].showDrop();
   // snow[i].updateY()
//}
 
  drawSprites();
}

