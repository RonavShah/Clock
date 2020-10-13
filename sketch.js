
hr = hour();
min = minute();
sc = second();

angleMode(DEGREES);


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  
 hrLine = new Hour(200,200,10,50);

 
 secLine = new Second(200,200,10,50);

 
 minLine = new Minute(200,200,10,50);

}

function draw() {
  background(255,255,255);  

  hrLine.display();  
  secLine.display();  
  minLine.display();



  drawSprites();
}