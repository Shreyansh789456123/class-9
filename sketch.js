var box;
function setup() {
  createCanvas(600,600);
  box = createSprite(200,200,100,100);
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    box.position.y=box.position.y - 2;
  }
drawSprites();

}




