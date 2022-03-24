var runner,sans
var obstacle
var restarts 
var bgimg
var backsprite
var gamestate = PLAY
var PLAY = 1
var gr
var hearts
var heart
var bbs
var bb
var heartImg
var bbImg
var vbs
var vb
var vbImg
var score = 0
var END = 0

function preload(){
  bgimg=loadImage("bg.jpg")
  sans = loadImage("sans.png")
  heartImg = loadImage("heart.png")
  bbImg = loadImage("orange.png")
  vbImg = loadImage("blue.png")
}

function setup() {
createCanvas(1000,600)
 backsprite=createSprite(200,200)
 backsprite.addImage(bgimg)
 backsprite.scale=2.5
 backsprite.x=backsprite.width/2
 runner = createSprite(75,520,50,50)
 runner.addImage(sans)
 runner.debug = true
 runner.scale = 0.1
 gr = createSprite(50,600,5000,50)
 gr.visible = false
 bbs = new Group()
hearts = new Group()
vbs = new Group()
vbs.debug = true

}

function draw() {
 runner.collide(gr)
 runner.velocityY = 15
 background(0)
 backsprite.velocityX=-4

  createHearts()
  createblueBones() 


console.log(gamestate)

 if(backsprite.x<0){
     backsprite.x=backsprite.width/2
 }
 if(keyDown("space")){
   runner.velocityY = runner.velocityY + -50
 }
 if(hearts.isTouching(runner)){
   score = score +1
 }

if(vbs.isTouching(runner)){
  gamestate = END
}
if(gamestate = END){
  runner.remove
}

if(runner.isTouching(vbs)){
  if(runner.velocityY > -1){
    runner.destroy()
  }
}

if(runner.isTouching(bbs)){
  if(runner.velocityY < -1){
    runner.destroy()
  }
}


 drawSprites()
 fill("red")
 textSize(20)
 text("score: "+score,900,50)
}

function createHearts() {
  if (World.frameCount % 60 == 0) {
  var heart = createSprite(1000,500,10,10);
  heart.addImage(heartImg);
  heart.scale=0.03;
  heart.velocityX = -5;
  heart.lifetime = 200;
  hearts.add(heart)
}
}
function createblueBones() {
  if (World.frameCount % 200 == 0) {
    var bb = createSprite(1000,500,10,10);
    bb.addImage(bbImg);
    bb.scale= 1.5;
    bb.velocityX = -5;
    bb.lifetime = 200;
    bbs.add(bb)
}
}

function createorangeBones() {
  if (World.frameCount % 130 == 0) {
    var vb = createSprite(1000,500,10,10);
    vb.addImage(vbImg);
    vb.scale= 1.5;
    vb.velocityX = -5;
    vb.lifetime = 200;
    vbs.add(vb)
    vb.debug = true
}
}