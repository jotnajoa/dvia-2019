
var angle 
var offset 
var scalar 
var speed 
// var col = {
//   r: 255,
//   g: 0,
//   b: 0
// };

function setup() { 
  createCanvas(1000, 1000);
  background(0)
  // noStroke();
} 

function draw() { 
  // col.r = random(0, 200);
  // col.g = random(0, 250);
  // col.b = random(100, 250);
  var now = clock()
  var tsp = now.progress.min
  var sp = now.progress.sec
  var ts = now.sec
  var td = now.day
  var tm = now.month
  var ch = now.hour
  var nh = now.hours
  var nmp = now.progress.hour
  var dn = now.pm
  var ndp = now.progress.day
  var ndfp = now.progress.month
  var cm = map(tm,1,12,50,3/4*height)
  var hp = map(ch,0,11,0,2*PI)
  var dst = 100

for(x=tm;x<13;x++){
  // Drawing one perspective line every month
  if(dn){
    background(0)
  } else{
    background(150)
  }
  
  push()
  stroke(255)
  strokeWeight(3)
  var offset = height-cm
  line(0,height,1/2*width,offset)
  line(width,height,1/2*width,offset)
  pop()

  // Drawing Circle floating above vanishing point

    for(y=tm;y<13;y++){
      y = offset - 100
      push()
      fill(50,50,0)
      noStroke()
      circle(1/2*width,y,100)
      pop()
// Fill the circle as a day pass
      
      push()
      fill(250,0,0)
      arc(1/2*width,y,100,100,-1/2*PI,-1/2*PI+hp)
      pop()

// Drawing circles revolving around the main circle represent seconds
      push()
      fill(50*nmp,0,50)
  var k = map(sp,0,1,0,2*PI)
  var a = 1/2*width + cos(k)*dst;
  var b = y + sin(k) * dst;
      circle(a,b,sp*100)
      pop()

  // Filling  pattern for the days
      push()
      var q = map(td,1,31,0,1/2*width)
      var w = map(td,1,31,offset,height)
      fill(q,0,0,q/5)
      noStroke()
      quad(1/2*width,offset,1/2*width-1/3*q,w,1/2*width+1/3*q,w)
      pop()


}
}
}


