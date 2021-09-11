var tiger,tigerImage;
var gazelle,gazelleImage;
var lion,lionImage,savanna,savannaImage;


function preload() {
 tigerImage = loadImage("images/tiger.png");
 gazelleImage = loadImage("images/gazelle.png");
 lionImage = loadImage("images/lion.png"); 
 savannaImage = loadImage("images/savanna.png"); 
}

function setup(){
 createCanvas(600,600);     
  savanna = createSprite(200,200);
  savanna.addImage("savanna",savannaImage);
  savanna.scale = 3;
  gazelle = createSprite(100,500);
  gazelle.addImage("gazelle",gazelleImage);
  gazelle.scale=0.3;
  
  
  
}

function draw(){
 background("red");
 savanna.velocityY=-5;
 if(savanna.y<0){
   savanna.y = 200;
 }
  obstacles()
  if(keyDown(LEFT_ARROW)){
    gazelle.x = gazelle.x-3;
    
  }
  if(keyDown(RIGHT_ARROW)){
    gazelle.x = gazelle.x+3;
     
  }
  if(keyDown(UP_ARROW)){
    gazelle.y = gazelle.y-3;
    
  }
  if(keyDown(DOWN_ARROW)){
    gazelle.y = gazelle.y+3;
    
  }



 drawSprites();
   



 
 
}
function obstacles(){
  if(frameCount%50 === 0){
 var obstacles = createSprite(random(100,500),random(100,200),10,40);
 obstacles.velocityY = -2;
 var rand = Math.round(random(1,2));
 switch(rand){
  case 1:obstacles.addImage(tigerImage);
  break;
  case 2:obstacles.addImage(lionImage);
  break;
  default:break;
 } 
 obstacles.scale=0.3;


}
}