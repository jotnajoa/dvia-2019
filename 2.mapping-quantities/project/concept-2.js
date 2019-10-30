var totals
var ddc

// var usvalue =[]
// var russvalue =[]
// var ukvalue =[]
// var frvalue =[]
// var chnvalue =[]
// var indvalue =[]
// var pksvalue =[]
// var nkvalue =[]
// var ddc
// var ddct =[]
// var x
// var y


function preload(){
  totals = loadTable('data/totals.csv','csv','header')
  ddc = loadTable('data/ddc.csv','csv','header')
}

function setup(){
  createCanvas(6000, 2000)
  background(230)
  var table = totals
  var times = ddc
  var x = 200
  var y =100
  var colWidth = 100
  var rowHeight = 100

  textStyle(BOLD)
  textAlign(RIGHT)

  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }
  for (var c=1; c<table.getRowCount(); c++){
  	var year = table.getString(c,0)
  	text(year,x,rowHeight-30)
  	x += colWidth
  }
for (var r=1; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      noStroke()
      fill(0,0,150)
      ellipse(200+(r-1)*colWidth,c*rowHeight,value/2)
      print(value)
    }
    y += rowHeight
  }
for (var r=1; r<times.getRowCount(); r++){
      var tvalue = times.getNum(r, 1)
      var kvalue = 60-tvalue
      var value = table.getNum(r,9)
      map (kvalue,0,60,0,2*PI)
      noStroke()
      fill(value*100,0,0)
      arc(200+(r-1)*colWidth,rowHeight*(table.getColumnCount()-1),value/2,value/2,0,kvalue)
    }
  }

