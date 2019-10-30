var totals
var clocks

function preload(){
  totals = loadtable('totals.csv','csv','header')
  clocks = loadtable('ddc.csv','csv','header')
}

function setup(){
  // Add a final argument of `SVG` to your createCanvas command
  createCanvas(3000, 500)
  background(0)
  
  var ttable = totals
  var ctable = clocks

  for (r=1;r<ttable.getRowCount();r++){
    var c = 1
    var nts = ttable.getNum(r,c)
    c = c+1
    print(nts)
  }  
}
