
function setup() {
  // set the width & height of the sketch
  createCanvas(600,400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  var x1, y1
  background(200);

for (y1=height;y1>0;y1=y1-1/4*height) {

  for (x1=0;x1<width;x1=x1+1/6*width){
      stroke(100);
  strokeWeight(2);
  line(0,y1,width,y1);
  line(x1,0,x1,height);

}
}
var h= now.hours;
var m= now.progress.hour;

if (h<7){
  rect(100*h,0,m*100,100);
} 
else if (6<h && h<13){
  rect(100*(h-6),100,m*100,100);
  } 
else if (12<h && h<19){
  rect(100*(h-12),200,m*100,100);
  } 
else {
  rect(100*(h-18),300,m*100,100);
  }

}