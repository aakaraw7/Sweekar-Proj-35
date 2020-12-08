  var dog,happydog,database,foodS,foodStock,dogImg,happydogImg;
  function preload(){
    dogImg = loadImage("dogImg.png");
  }

  function setup(){
    createCanvas(800, 700);
    
    
  }


  function draw(){

    image(dogImg,330,300,200,200);
    drawSprites();
    //add styles here

  }

