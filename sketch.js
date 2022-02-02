var img1,img2,img3,img4,img5,img6,img7,img8,img9,img0,imgEqual,imgAdd,imgSubtract,imgMultiply,imgDivide,imgClear;
var one,two,three,four,five,six,seven,eight,nine,zero,add,divide,subtract,multiply,equal,clear;
var gameState=0;
var a,b,c,d;
var calImg,calculator;

function preload(){
  img0=loadImage("0.png");
  img1=loadImage("1.png");
  img2=loadImage("2.png");
  img3=loadImage("3.png");
  img4=loadImage("4.png");
  img5=loadImage("5.png");
  img6=loadImage("6.png");
  img7=loadImage("7.png");
  img8=loadImage("8.png");
  img9=loadImage("9.png");
  imgAdd=loadImage("add.png");
  imgSubtract=loadImage("subtract.png");
  imgMultiply=loadImage("multiply.png");
  imgDivide=loadImage("divide.png");
  imgClear=loadImage("AC.png");
  imgEqual=loadImage("equal.png");
  calImg=loadImage("calculator.png")
}


function setup() {
  createCanvas(3000,1000);

  zero=createSprite(400, 205);
  zero.addImage(img0);
  zero.visible=false;

  one=createSprite(500, 205);
  one.addImage(img1);
  one.visible=false;


  two=createSprite(600, 200);
  two.addImage(img2);
  two.visible=false;


  three=createSprite(700, 200);
  three.addImage(img3);
  three.visible=false;

  four=createSprite(800, 200);
  four.addImage(img4);
  four.visible=false;

  five=createSprite(400, 250);
  five.addImage(img5);
  five.visible=false;

  six=createSprite(500, 250);
  six.addImage(img6);
  six.visible=false;

  seven=createSprite(600, 250);
  seven.addImage(img7);
  seven.visible=false;

  eight=createSprite(700, 250);
  eight.addImage(img8);
  eight.visible=false;

  nine=createSprite(800, 250);
  nine.addImage(img9);
  nine.visible=false;

  add=createSprite(600, 200);
  add.addImage(imgAdd);
  add.visible=false;

  subtract=createSprite(600, 250);
  subtract.addImage(imgSubtract);
  subtract.visible=false;

  multiply=createSprite(600, 300);
  multiply.addImage(imgMultiply);
  multiply.visible=false;

  divide=createSprite(600, 350);
  divide.addImage(imgDivide);
  divide.visible=false;
  
  clear=createSprite(600, 300);
  clear.addImage(imgClear);
  clear.visible=false;
   
  calculator=createSprite(600,300);
  calculator.addImage(calImg);
}

function draw() {
  background(255,255,255);  

  if(gameState===0){
    
    textSize(20);
    fill("red");
    text("Choose the first number",400,100);

    one.visible=true;
    two.visible=true;
    three.visible=true;
    four.visible=true;
    five.visible=true;
    six.visible=true;
    seven.visible=true;
    eight.visible=true;
    nine.visible=true;
    zero.visible=true;
    
    if(mousePressedOver(one)){
      a=1;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(two)){
      a=2;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(three)){
      a=3;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(four)){
      a=4;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(five)){
      a=5;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(six)){
      a=6;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(seven)){
      a=7;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }

    if(mousePressedOver(eight)){
      a=8;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      console.log(a);
      gameState=1;
    }

    if(mousePressedOver(nine)){
      a=9;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=1;
    }
  }


  if(gameState==1){

    textSize(20);
    fill("red");
    text("Choose an operation",400,100);

    add.visible=true;
    subtract.visible=true;
    divide.visible=true;
    multiply.visible=true;

    if(mousePressedOver(add)){
      b="addition";
      add.visible=false;
      subtract.visible=false;
      divide.visible=false;
      multiply.visible=false;
      gameState=2
    }

    if(mousePressedOver(subtract)){
      b="subtraction";
      add.visible=false;
      subtract.visible=false;
      divide.visible=false;
      multiply.visible=false;
      gameState=2
    }

    if(mousePressedOver(multiply)){
      b="multiplication";
      add.visible=false;
      subtract.visible=false;
      divide.visible=false;
      multiply.visible=false;
      console.log(b);
      gameState=2
    }

    if(mousePressedOver(divide)){
      b="division";
      add.visible=false;
      subtract.visible=false;
      divide.visible=false;
      multiply.visible=false;
      gameState=2
    }
  }

  if(gameState===2){
    textSize(20);
    fill("red");
    text("Choose the second number",400,100);

    one.visible=true;
    two.visible=true;
    three.visible=true;
    four.visible=true;
    five.visible=true;
    six.visible=true;
    seven.visible=true;
    eight.visible=true;
    nine.visible=true;
    zero.visible=true;
    
    if(mousePressedOver(one)){
      c=1;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(two)){
      c=2;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(three)){
      c=3;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(four)){
      c=4;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(five)){
      c=5;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(six)){
      c=6;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(seven)){
      c=7;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }

    if(mousePressedOver(eight)){
      c=8;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      console.log(c);
      gameState=3;
    }

    if(mousePressedOver(nine)){
      c=9;
      one.visible=false;
      two.visible=false;
      three.visible=false;
      four.visible=false;
      five.visible=false;
      six.visible=false;
      seven.visible=false;
      eight.visible=false;
      nine.visible=false;
      zero.visible=false;
      gameState=3;
    }
  }

  if(gameState===3){

    if(b==="multiplication"){
      d=a*c;
      textSize(20);
      fill("red")
      text("Result="+d,400,100);
    }

    if(b==="division"){
      d=a/c;
      textSize(20);
      fill("red")
      text("Result="+d,400,100);
    }

    if(b==="addition"){
      d=a+c;
      textSize(20);
      fill("red")
      text("Result="+d,400,100);
    }

    if(b==="subtraction"){
      d=a-c;
      textSize(20);
      fill("red")
      text("Result="+d,400,100);
    }
    
  }
  drawSprites();
}