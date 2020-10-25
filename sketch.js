var FR,MR
function setup() {
  createCanvas(1200,800);
  FR=createSprite(200, 200, 50, 80)
  MR=createSprite(400, 200, 80, 50)
  FR.shapeColor="green"
  MR.shapeColor="green"
}
function draw() {
  background(0);  

  MR.x=World.mouseX
  MR.y=World.mouseY

  if(MR.x-FR.x<MR.width/2+FR.width/2 &&
    FR.x-MR.x<MR.width/2+FR.width/2 &&
    MR.y-FR.y<MR.height/2+FR.height/2 &&
    FR.y-MR.y<MR.height/2+FR.height/2){
    FR.shapeColor="red"
    MR.shapeColor="red"
  }else{
    FR.shapeColor="green"
    MR.shapeColor="green"
  }

  drawSprites();
}