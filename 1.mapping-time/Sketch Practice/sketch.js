
function setup(){


createCanvas(500, 500, WEBGL);
background(240, 240, 240);
noFill()
strokeWeight(3);
beginShape();
vertex(-10, 10);
vertex(0, 35);
vertex(10, 10);
vertex(35, 0);
vertex(10, -8);
vertex(0, -35);
vertex(-10, -8);
vertex(-35, 0);
vertex(-10, 10);
endShape();
}