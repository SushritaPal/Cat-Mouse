var bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1,mouseImg2, mouseImg3;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,600,50,50);
    mouse = createSprite(150,600,50,50);
    cat.addAnimation("catsitting",catImg1);
    cat.scale=0.2;
    mouse.addAnimation("mousecheese",mouseImg1);
    mouse.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width + mouse.width)/5){
        cat.addAnimation("catstopped",catImg3);
        cat.changeAnimation("catstopped");
        cat.velocityX=0;
        mouse.addAnimation("mousestand",mouseImg3);
        mouse.changeAnimation("mousestand");
        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        mouse.addAnimation("mouseteasing",mouseImg2);
        mouse.changeAnimation("mouseteasing");
        cat.addAnimation("catmoving",catImg2);
        cat.changeAnimation("catmoving");
        cat.velocityX=-4;
    }

}
