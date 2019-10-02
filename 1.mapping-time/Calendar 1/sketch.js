function setup(){
  createCanvas(500,500);

}

function draw(){
  
  var now = clock();
  var cm = now.month;
  var cd = now.day;
  var dp = now.progress.month;
  var yp = now.progress.year;
  var r = random(-3,3);
  fill(100*yp,15*yp,25*yp,60*dp);
  noStroke();
 
  rect((cm-1)*width/12,height-height/30*cd,width/24,30);
  background(15,15,15,yp)
}
