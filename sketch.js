var fixedRect, movingRect,fixedRect2,movingRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  fixedRect2 = createSprite(800, 100, 50, 80);
  fixedRect2.shapeColor = "orange";
  fixedRect2.debug = true;
  movingRect2 = createSprite(100, 100,80,30);
  movingRect2.shapeColor = "blue";
  movingRect2.debug = true;

  movingRect2.velocityX = +5;
  fixedRect2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect2,fixedRect2);
  bounceOff(fixedRect,movingRect);
  drawSprites();
}
function bounceOff(obj,obj2){
  if (obj.x - obj2.x < obj2.width/2 + obj.width/2
    && obj2.x - obj.x < obj2.width/2 + obj.width/2) {
  obj.velocityX = obj.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if (obj.y - obj2.y < obj2.height/2 + obj.height/2
  && obj2.y - obj.y < obj2.height/2 + obj.height/2){
    obj.velocityY = obj.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
}
}