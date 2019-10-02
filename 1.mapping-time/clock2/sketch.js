var x1, y1;
var x2, y2;

function setup() {
  createCanvas(200,400);
  // background(50);
 
}


function draw() {
  var now = clock();

   if (now.am){
    background(0)
  }else{
    background(255)
  }
  push()
  strokeWeight(1);
  stroke(200);
   for (x=0; x<200; x=x+width/12) {
    line(x,height,x,0);
  }
   pop();
  noFill()
  var s = now.progress.min
  var m = now.progress.hour
  var h = now.progress.halfday
  stroke('orange');
  strokeWeight(5);
  beginShape();
  vertex(0,height-height*h);
  vertex(m*width,height-height*h-30);
  vertex(width,height-height*h);
  endShape();
  }
