var bullet, wall;
var speed, weight, thickness;


function setup() {

  createCanvas(1200, 600);
  

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  
  bullet = createSprite(0, 175, 20, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1200, 200, thickness, 300);
  wall.shapeColor = "white";

}

function draw() {
  background("black")




  if(collided(bullet, wall)){

    bullet.velocityX = 0;
    
  var deformation = 0.5*weight*speed*speed/thickness^3;
    if (deformation>10){
      bullet.shapeColor = "red";
    }
    if(deformation<10){
      bullet.shapeColor = "green";
    }  
 
  }
 

  bullet.depth = wall.depth;
  bullet.depth = bullet.depth+1;
  
  drawSprites();
}

function collided(object1, object2){

  
  if(object1.x-object2.x<object1.width/2+object2.width/2){
    return true;
  }
  else{
    return false;
  }
     
}