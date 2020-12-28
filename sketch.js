var dog, dogIMG, happyDogIMG, database, foodS, foodStock;


function preload()
{
  dogIMG = loadImage("dogImg.png");
  happyDogIMG = loadImage("dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  dog = createSprite (250,250,10,10);
  dog.addImage(dogIMG);
  dog.scale = 0.5;
  foodStock = database.ref('food'),
    foodStock.on("value",readStock);
  
}
function draw() { 
  background(46, 139, 87);  
  
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  drawSprites();
  textSize(20);
  fill("white");
  stroke("black");
  text("Note: Press UP_ARROW Kry To Feed Drago Milk!",35,50);
  //text("Food Remaining :"+ Food,100,100);
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if (x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


