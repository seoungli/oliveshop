let img_Banner;
let img_green;
let img_icon;
let img_product;
let img_navbar;
let img_gnb ;
let img_box ;

let state = 0;

function preload(){
  img_navbar = loadImage('NavBar.png');
  img_Banner = loadImage('Banner.png');
  img_product = loadImage('Product.png');
  img_gnb = loadImage('GNB.png');
  img_icon = loadImage('ai_icon.png');
  img_green = loadImage('green.png');
  img_box = loadImage('textbox.png');
  
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  if(state==0){
  image(img_navbar,0,0,393,128);
  image(img_Banner,0,128,393,284);
  image(img_product,0,412,393,440);
  image(img_gnb,0,764,393,88) 
  image(img_icon,320,688,60,60);
  }
  else if(state==1){
  image(img_navbar,0,0,393,128);
  image(img_Banner,0,128,393,284);
  image(img_product,0,412,393,440);
  image(img_green,0,612,393,152);
  image(img_gnb,0,764,393,88) 
  image(img_icon,320,688,60,60);
   
  }
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <= 380){
    if(mouseY >= 688 && mouseY <= 748){
      if(state == 0){
        state = 1;
      }else if(state == 1){
        state=0;
      }
    }
  }
}