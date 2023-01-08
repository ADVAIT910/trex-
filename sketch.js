var trex,ground,ground2,clouds,cactus;
var trexImg,groundImg,cloudImg,c1,c2,c3,c4,c5,c6;

function preload(){
  trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg  = loadImage("cloud.png");
  c1 = loadImage("obstacle1.png");
  c2 = loadImage("obstacle2.png");
  c3 = loadImage("obstacle3.png");
  c4 = loadImage("obstacle4.png");
  c5 = loadImage("obstacle5.png");
  c6 = loadImage("obstacle6.png");

}

function setup(){

  trex = createSprite(50,150,10,10);
  trex.addAnimation("running", trexImg)
  trex.scale = 0.5
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImg);
  ground2 = createSprite(300,193 ,600,20);
}


function draw(){

  createCanvas(600,200);
  background(180);
  if(keyDown("space")&&trex.y>150){
     trex.velocityY = -10 ;
  }
  ground.velocityX = -5;
  trex.velocityY = trex.velocityY + 1  ;
  trex.collide(ground2); 
  ground2.visible = false;

  if(ground.x<0){
    ground.x  = ground.width/2;
    
  }
 // console.log(trex.y);
  createClouds();
  createCactus();
  drawSprites();
}
function createClouds(){
  if(frameCount%80===0){
    clouds = createSprite(600,20,10,10);
    clouds.velocityX  =-5;
    clouds.addImage("clouds",cloudImg);
    clouds.y = random(10,120);
    trex.depth = clouds.depth;
    trex.depth = trex.depth +1;
    clouds.lifetime = 120;
}
}
function createCactus(){
  if(frameCount%100===0){
    cactus = createSprite(600,160,20,20);
    cactus.velocityX = -3;
    cactus.lifetime = 200;
    var r = Math.round(random(1,6));
    console.log(r);
    switch(r){
      case 1: cactus.addImage("c1",c1);
      break
      case 2: cactus.addImage("c2",c2);
      break
      case 3: cactus.addImage("c3",c3);
      break
      case 4: cactus.addImage("c4",c4);
      break
      case 5: cactus.addImage("c2",c5);
      break      
      case 6: cactus.addImage("c6",c6);
      break
      default:break;
    }
    cactus.scale = 0.6;
  }

  }