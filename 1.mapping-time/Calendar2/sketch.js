
function setup(){
  createCanvas(600,600)
  background(35)
}

function draw(){
  var now = clock();
  var td = now.day;
  var tm = now.month;
  var tdp= now.progress.month
  var tmp = now.progress.year
  stroke(255,100,0,30)
  noFill()
  strokeWeight(random(1,5))
  ellipse(width/2,height/2,tm*height*1/12,tm*height*1/12)
  push();
  strokeWeight(0.5)

  ellipse(width/2, height/2, width,td*5)
  pop()
  if(td == 1) {
    background(0)
  }



}