var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed= random(223,321);
  weight = random(30,52);
  thickness =random(22,83);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor= "white";
  bullet.velocityX=speed;

}

function draw() {
  background(0);  

  if(hasCollided(bullet, wall)){

    bullet.velocityX=0;

    var damage =(0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor= "red";

    }
    else if(damage<10){
      wall.shapeColor="green";
    }

  }
  


  


  drawSprites();
}

function hasCollided(bullet1, wall1){
  var bulletRightEdge= bullet1.x+bullet1.width;
  var wallLeftEdge = wall1.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }



}
