
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;
var ground;
var PLAY=1
var END=2
var gameState=PLAY
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  m=loadImage("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  
   monkey=createSprite(50,280,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
   ground=createSprite(200,280,600,10)
   ground.x = ground.width/2;    
  bananaGroup=createGroup()
  obstacleGroup=createGroup()
}


function draw() {
 
background(300)
   text("survival time: -"+score,490,30)
  if(gameState===PLAY){
    
  
  score=Math.ceil(frameCount/20)
  console.log(monkey.y)
  
  ground.velocityX=-5
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&&monkey.y>=240){
  monkey.velocityY = -15;
 }
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
 if(monkey.isTouching(bananaGroup)){
      
    bananaGroup.destroyEach()
      
    }
 
    
    
  
  spawnObstacles()
  monkey.debug=false
  bananas()
}
   if(monkey.isTouching(obstacleGroup)){
    gameState=END
   }
  if(gameState===END){
    
   ground.velocityX=0
    bananaGroup.velocityX=0
    obstacleGroup.velocityX=0
   obstacleGroup.destroyEach()
   bananaGroup.destroyEach()
  }
  
  drawSprites();
}
function spawnObstacles(){
 if (frameCount % 180 === 0){
   var obstacle = createSprite(600,257,10,40);
   obstacle.addImage("obstacl",obstaceImage)
   obstacle.velocityX=-5
   obstacle.scale=0.1
    obstacle.lifetime=200
   obstacleGroup.add(obstacle)
 }
}
function bananas(){
  if(frameCount%120===0){
  var banana=createSprite(600,300,20,20)
  banana.addImage("banan1",bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
   banana.y=Math.round(random(120,233))
   banana.lifetime=200 
    banana.debug=false
    bananaGroup.add(banana)
    
     
  
  }
}





