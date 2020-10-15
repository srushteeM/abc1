var mRect,fRect;


function setup() {
  createCanvas(800,400);
  mRect=createSprite(400, 200, 50, 50);
  fRect=createSprite(200,200,30,80);
}

function draw() {
  background(0);  
  drawSprites();
}