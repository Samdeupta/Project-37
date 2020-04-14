var database,position;
var pen;
var red,blue,yellow,green,purple,pink,maroon,black,brown;
var eraser,eraserImg;

function preload(){
  eraserImg = loadImage('eraser.png');
}

function setup(){
  createCanvas(1500,700);
  
  pen = createSprite(0,0,10,10);
  pen.shapeColor = 'black';

  red = createSprite(20,40,20,20);
  red.shapeColor = 'red';

  blue = createSprite(50,40,20,20);
  blue.shapeColor = 'blue';

  green = createSprite(80,40,20,20);
  green.shapeColor = 'green';

  yellow = createSprite(20,80,20,20);
  yellow.shapeColor = 'yellow';

  purple = createSprite(50,80,20,20);
  purple.shapeColor = 'purple';
  
  pink = createSprite(80,80,20,20);
  pink.shapeColor = 'pink';

  maroon = createSprite(20,120,20,20);
  maroon.shapeColor = 'maroon';

  brown = createSprite(50,120,20,20);
  brown.shapeColor = 'brown';

  black = createSprite(80,120,20,20);
  black.shapeColor = 'black';

  eraser = createSprite(50,160,80,30);
  eraser.addImage(eraserImg);
  eraser.scale = 0.3;
}

function draw() {
  database = firebase.database();
  var pen=database.ref("Pen/Position");
  pen.on("value",readPosition);

  ///background('black');
  
  rect(0,0,100,699);
  line(0,699,1500,699);
  line(1499,699,1499,1);


  mouse();
  penColor();
  
  
 drawSprites();
}

function changePosition(x,y){
  database.ref("Pen/Position").set({
      "x": position.x + x,
      "y": position.y + y
  }) 
}

function readPosition(data){
  position=data.val();

  pen.x = position.x;
  pen.y = position.y;
}

function mouse(){
  if(mouseDown('leftButton')){
    pen.x = mouseX;
    pen.y = mouseY;
  }
}

function penColor(){
  if(mousePressedOver(red)){
    pen.shapeColor = 'red';
  }

  if(mousePressedOver(blue)){
    pen.shapeColor = 'blue';
  }

  if(mousePressedOver(yellow)){
    pen.shapeColor = 'yellow';
  }

  if(mousePressedOver(green)){
    pen.shapeColor = 'green';
  }

  if(mousePressedOver(maroon)){
    pen.shapeColor = 'maroon';
  }

  if(mousePressedOver(brown)){
    pen.shapeColor = 'brown';
  }

  if(mousePressedOver(black)){
    pen.shapeColor = 'black';
  }
  
  if(mousePressedOver(pink)){
    pen.shapeColor = 'pink';
  }

  if(mousePressedOver(purple)){
    pen.shapeColor = 'purple';
  }

  if(mousePressedOver(eraser)){
    pen.shapeColor = 'white';
  }
}

