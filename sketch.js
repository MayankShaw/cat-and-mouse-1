var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg=loadImage
    catimg = loadAnimation("image/cat1.png");
    mouseimg1= loadAnimation("images/mouse1.png");
    catimg2= loadAnimation("add cat2 and cat3 image url here.");
    mouseimg2 =loadAnimation("add mouse2 and mouse3 image url here.");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}


function draw() {

    background("add image variable name here");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    MouseEvent.AddAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay= 25;

}


}if(keyCode === RIGHT_ARROW){

     mouse.AddAnimation("mouseTeasing", mouseimg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay= 25;

}

