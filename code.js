var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var startingPoint = createSprite(25,200,100,155);
  startingPoint.shapeColor = "lightblue";
var endingPoint = createSprite(375,200,80,155);
  endingPoint.shapeColor = "yellow";
var person = createSprite(40,200,20,20);
  person.shapeColor = "green";
var blocks = createGroup();
var block1 = createSprite(115,200,15,15);
  block1.shapeColor = "red";
  blocks.add(block1);
var block2 = createSprite(175,200,15,15);
  block2.shapeColor = "red"; 
  blocks.add(block2);
var block3 = createSprite(235,200,15,15);
  block3.shapeColor = "red";
  blocks.add(block3);
var block4 = createSprite(295,200,15,15);
  block4.shapeColor = "red"; 
  blocks.add(block4);
var topLine = createSprite(200,120,400,5);
var bottomLine = createSprite(200,280,400,5);
var deaths = 0;

//adding velocity to blocks
block1.velocityY = 8;
block2.velocityY = -8;
block3.velocityY = 8;
block4.velocityY = -8;


function draw() {
  background("white");

//deaths
text("Deaths: "+ deaths,180,50);

if(person.isTouching(block1))
  reset();

if(person.isTouching(block2))
  reset();
  
if (person.isTouching(block3))
  reset();

if(person.isTouching(block4))
  reset();
 
//moving person
if(keyDown("left")){
  person.x = person.x-5;
}

if(keyDown("right")){
  person.x = person.x+5;
}

//end

if(person.isTouching(endingPoint)){
textSize(20);
fill("green");
text("You Won!",150,320);
}

//bounce off

blocks.bounceOff(topLine);
blocks.bounceOff(bottomLine);


drawSprites(); 
}


function reset(){
  deaths = deaths+1;
  person.x = 40;
  person.y = 200;

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
