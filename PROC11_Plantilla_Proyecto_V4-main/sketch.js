var ship,ship_navegar;



function preload(){
  ship_navegar = loadAnimation("./ship-1.png", "./ship-2.png", "./ship-3.png", "./ship-4.png")
  
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,200,50,50)
  ship.scale = 0.5;
  ship.addAnimation("ship",ship_navegar)
}


function draw() {
  background("blue");
  drawSprites();
}
 
