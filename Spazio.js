let myFont,ech;
let spazio, cosmico;
let col1, col2, col3;
function preload() {
  myFont = loadFont('corbell.ttf');
}
function setup() {
  createCanvas(min(windowWidth, windowHeight),min(windowWidth, windowHeight));
	
	if (window.DeviceOrientationEvent) { window.addEventListener('orientationchange', function() { location.reload(); }, false); }
	ech=.0007*width;
  textFont(myFont);
  textSize(.07*width);
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER);
  noStroke();
  colorMode(HSB, 360, 255, 255, 255);  
  backGroundColor=color(60, 5, 250);
  col1=color(150, 150, 100);
  col2=color(0, 150, 200);
  col3=color(0, 150, 200);
  spazio=[new Letter("S", new p5.Vector(300, .4*height), col1), new Letter("P", new p5.Vector(400, .4*height), col1), new Letter("A", new p5.Vector(500, .4*height), col1), 
    new Letter("Z", new p5.Vector(600, .4*height), col1), new I(new p5.Vector(700, .4*height), col3, 0, random(1)>.5?-1:1), new O(new p5.Vector(800, .4*height), col3, col3, random(1)>.5?-1:1)];
  cosmico=[new Letter("C", new p5.Vector(300, .6*height), col1), new O(new p5.Vector(420, .6*height), col1, random(1)>.5?-1:1 ), new Letter("S", new p5.Vector(530, .6*height), col2)
    ,new Letter("M", new p5.Vector(630, .6*height), col1), new I(new p5.Vector(720, .6*height), col3, 0, random(1)>.5?-1:1), new Letter("C", new p5.Vector(800, .6*height), col1), new O(new p5.Vector(900, .6*height), col3, col3, 1), 
    new I(new p5.Vector(547, .583*height), col3,int(random(9))*.25*PI,random(1)>.5?-1:1), new I(new p5.Vector(1100, .5*height), col3, HALF_PI, random(1)>.5?-1:1), new I(new p5.Vector(1100, .5*height), col3, HALF_PI, random(1)>.5?-1:1)];
}


function draw() {
  background(backGroundColor);    
  for (let i=0; i<spazio.length; i++) {
    spazio[i].display();
  }
  for (let i=0; i<cosmico.length; i++) {
    cosmico[i].display();
  }
  stroke(col3);
  strokeWeight(ech*4);
  line(ech*800,.5*height, ech*(800-300*(1-sin(.02*frameCount))), .5*height);
  line(ech*(800-300*(1-sin(.02*frameCount))),.5*height,ech*(820-300*(1-sin(.02*frameCount))),.51*height);
  line(ech*(800-300*(1-sin(.02*frameCount))), .5*height,ech*(820-300*(1-sin(.02*frameCount))), .49*height);
  for (i=0; i<.2*frameCount%25; i++) {
    stroke(col1);
    if (i%2==0)line(ech*(380+30*i), .49*height, ech*(350+30*i), .51*height);
    else line(ech*(380+30*i), .51*height, ech*(350+30*i),.49*height);
  }
  noStroke();
}
function mousePressed(){
	fullscreen();
}
