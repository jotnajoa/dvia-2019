var cx 
var cy
var secondsRadius
var minutesRadius
var hoursRadius
var clockDiameter
var dotRadius
var tickRadius
var discrete = true
var twelve
var TWO_PI
var HALF_PI

function setup(){
  createCanvas(500,500)
  var radius = min(width, height) / 2;

  tickRadius = radius * .7
  clockDiameter = radius * 1.666
  hoursRadius = radius * 0.50
   cx = width / 2
   cy = height / 2
}

function draw() {

fill(80)
background(50)
 for (var a = 30; a < 360; a+=30) {
    let angle = radians(a),
        adjust = radians(PI/2),

        x0 = cx - sin(angle-PI) * tickRadius;
        y0 = cy - cos(angle) * tickRadius;
          text(a/30, x0, y0);
        text('12',cx,cy-tickRadius);

 var now = clock();
  var s = (now.progress.min * TWO_PI) - HALF_PI;
  var m = (now.progress.hour * TWO_PI) - HALF_PI;
  var h = (now.progress.halfday * TWO_PI) - HALF_PI;

push();

strokeWeight(20);
stroke(200,200,200);
line(cx, cy, cx + cos(h)*hoursRadius, cy + sin(h)*hoursRadius);

push();
strokeWeight(5);
stroke(0);
line(cx,cy,cx,cy-tickRadius/2);
pop();
pop();

}
  }