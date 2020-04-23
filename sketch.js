var fixRect, moveRect, ob1, ob2, ob3;

function setup() {
  createCanvas(1200,800);
  ob1 = createSprite(400, 100, 50, 80);
  ob1.shapeColor = "green";
  //fixedRect.debug = true;
  ob2 = createSprite(400, 800,80,30);
  ob2.shapeColor = "green";
  //movingRect.debug = true;

  fixRect = createSprite(100, 500, 100, 100);
  moveRect = createSprite(100, 100, 100, 100);
  ob2.velocityY = -5;
  ob1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bo(ob1,ob2)

  moveRect.x=mouseX;
  moveRect.y=mouseY;
if(it(moveRect, fixRect)){
  moveRect.shapeColor="blue";
  fixRect.shapeColor="blue";
}
else{
  moveRect.shapeColor="black";
  fixRect.shapeColor="black";
}
  drawSprites();
}

function bo(o1, o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2) {
  o1.velocityX =o1.velocityX * (-1);
  o2.velocityX = o2.velocityX * (-1);
}
if (o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2){
  o1.velocityY = o1.velocityY * (-1);
  o2.velocityY = o2.velocityY * (-1);
}
}

function it(r1, r2){
  if(r1.x-r2.x<r2.width/2+r1.width/2&&
    r2.x-r1.x<r1.width/2+r2.width/2&&
    r1.y-r2.y<r2.height/2+r1.height/2&&
    r2.y-r1.y<r1.height/2+r2.height/2){
      return true
  }
  else {
   return false
  }
}