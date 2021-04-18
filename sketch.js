var PLAY=0
var END=1
var gameState=PLAY
var mon
var monkey , monkey_run,bg,back
var banana ,bananaImage, obstacle, obstacleImage,ground
var FGroup, oGroup
var score=0

function preload(){
  
  
  monkey_run =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  mon=loadAnimation("sprite_3.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 back=loadImage("24936945.jpg")
}



function setup(){
 
  
  createCanvas(400,400)
  
   bg=createSprite(0,250,0,0)
  monkey=createSprite(50,300,20,3)
monkey.addAnimation("k",monkey_run)  
  monkey.scale=0.1
 
  
 
  bg.scale=1
  bg.x = bg.width/2;

  ground=createSprite(0,400,400,100)
 
  ground.visible=false;
  
  
  
  fGroup=createGroup();
  oGroup=createGroup();
}


function draw() {
  background("red")
  
  drawSprites();  
 
  
  
  
  if(gameState===PLAY){
 bg.velocityX=-4
  bg.addImage("l",back)
    spawnfruits();
    spawno();
  ground.velocityX=-4
  ground.x = ground.width /2; 
    if(bg.x < 20){
    bg.x = bg.width/2;
          }
    if(ground.x < 20){
    ground.x = ground.width/2;
          }
    
    textSize(20)
    stroke("red")
    fill("yellow")
    text("score:"+score,50,50)
    
    
    
    if(monkey.isTouching(fGroup)){
      
      fGroup[0].destroy();
      score=score +1
    
    }
    
    
    if(monkey.isTouching(oGroup)){
      
      monkey.changeAnimation("k",mon)
      gameState=END
    }
    
    if(keyDown("space") && monkey.y>=200){
      monkey.velocityY=-8
      
    }
 monkey.velocityY = monkey.velocityY + 1.2
monkey.collide(ground);
   
  
  
  }
  if(gameState===END){
    
    
    ground.setVelocity=0
  bg.velocityX=0
    monkey.velocityX=0
    fGroup.destroyEach();
     oGroup.destroyEach();
    var x=createSprite(200,400,400,100)
    monkey.collide(x)
    x.depth=bg.depth
    bg.depth=bg.depth+1
    
    
    if(keyDown("r")){
      
      gameState=PLAY
      monkey.depth=bg.depth
      monkey.depth=monkey.depth+1
      score=0
     // ground.velocity=-6
     // bg.velocity=-6
    }
    
    
  }
 // console.log(bg.depth)
  
  

  
}

function spawnfruits(){
  
  
  if(frameCount%70===0){ banana=createSprite(400,random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
   banana.lifetime=150
    banana.velocityX=-7
                        
    fGroup.add(banana);                    
                        
  //bg.depth=banana.depth
  //banana.depth=banana.depth+3
    
    
  }
  

  
  
  
}


function spawno(){
  
  if(frameCount%120===0){
    obstacle=createSprite(300,320,20,20)
obstacle.addImage(obstaceImage)
    obstacle.scale=0.2
    obstacle.velocityX=-4
    oGroup.add(obstacle);
    
  }
  
  
}





