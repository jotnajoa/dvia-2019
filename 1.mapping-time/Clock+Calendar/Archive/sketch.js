
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
  // noStroke();
  background (100);
} 

function draw() { 
  // col.r = random(0, 200);
  // col.g = random(0, 250);
  // col.b = random(100, 250);

  var now = clock()
  var tsp = now.progress.min
  var ts = now.sec
  var td = now.day
  var tm = now.month
  var nh = now.hours
  var nmp = now.progress.hour
  var dn = now.pm
  var ndp = now.progress.day
  stroke(255,100,100,tsp*50)
  offset = 50;

  k = map(td,1,31,0,360)
  t = map(tsp,0,1,0,height)
  l = map(ts,1,60,0,360)
  var x = offset + cos(k) * tm*20;
  var y = offset + sin(k) * tm*20;
  fill(nh*150/24,50,80*dn, 100*ndp);
  ellipse(x, y, 60, 60);
  
    line(0,t,width,height-t)

}



