var fixedrec,movingrec;


function setup() {
  createCanvas(800,400);
 movingrec= createSprite(400, 200, 50, 50);
 fixedrec= createSprite(200,200,80,80);
 movingrec.shapeColor="red";
 fixedrec.shapeColor="red";

}

function draw() {
  background(255,255,255);
  movingrec.x=mouseX;
  movingrec.y=mouseY;
  
  if(movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2  && 
    fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2 && 
    movingrec.y-fixedrec.y<fixedrec.height/2+movingrec.height/2 && 
    fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2){ 
    
movingrec.shapeColor="blue";
fixedrec.shapeColor="blue";



  }
  else{
  movingrec.shapeColor="red";
  fixedrec.shapeColor="red";
  }



  drawSprites();
  
}