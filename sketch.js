var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  background("lightgreen");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5;
  }
drawSprites();
}




