function setup() {
  createCanvas(500,500);
  noStroke();
  background(200)

}

function draw() {
 

  var now = clock()
  var td = now.day
  var tm = now.month
  var tdp = now.progress.month
  fill(255*tdp, 102, 204);
   if(tm==1 && td==1){
    background(200)}
    
  
  x=map(td,0,31,0,width)
  y=map(tm,0,12,0,height)
  rect(0,y-height/12,width,height/12)
  translate(x,y)
  rect(0-width/31,0-height/12,width/31,height/13)

}