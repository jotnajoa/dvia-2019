var data
var colWidth
var rowHeight
var ustotal =[]
var russtotal =[]
var uktotal =[]
var frtotal = []
var chntotal =[]
var indtotal =[]
var pkstotal = []
var nktotal = []
var ddcc = []
var tototal = []


function preload(){
  // data = loadJSON('data/totals.json')
  data = loadTable('data/totals.csv', 'csv', 'header')
  ddc = loadTable('data/ddc.csv','csv', 'header')
}

function setup(){
  createCanvas(4000,800)
  background(0,0,50,30)
  table = data
  clock = ddc
  colWidth = 50
  rowHeight= 50
  
  // for (r=1;r<table.getRowCount();r++){
  		
  	stroke(100,0,0)
  	for(c=1;c<table.getRowCount();c++){
  	var r=1
  	var noty = table.getNum(c,r)
  	ustotal.push(noty)	
  	}
  	beginShape()
  	for (i=1;i<ustotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-ustotal[i]*3)
  	}
  	endShape()
  	fill(200,200,200)
  	text("united states",16*colWidth,height/2-ustotal[16]*3)

  	stroke(100,100,0)
  	for(c=1;c<table.getRowCount();c++){
  	var r=2
  	var noty = table.getNum(c,r)
  	russtotal.push(noty)	
  	}
  	beginShape()
  	for (i=1;i<russtotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-russtotal[i]*3)
  	}
  	endShape()

	stroke(100,100,50)
  	for(c=1;c<table.getRowCount();c++){
  	var r=3
  	var noty = table.getNum(c,r)
  	uktotal.push(noty)	
  	}
  	
  	beginShape()
  	for (i=1;i<uktotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-uktotal[i]*3)
  	}
  	endShape()

  	stroke(100,100,100)
  	for(c=1;c<table.getRowCount();c++){
  	var r=4
  	var noty = table.getNum(c,r)
  	frtotal.push(noty)	
  	}
  	
  	beginShape()
  	for (i=1;i<frtotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-frtotal[i]*3)
  	}
  	endShape()

  	stroke(100,0,100)
  	for(c=1;c<table.getRowCount();c++){
  	var r=5
  	var noty = table.getNum(c,r)
  	chntotal.push(noty)	
  	}
  	
  	beginShape()
  	for (i=1;i<chntotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-chntotal[i]*3)
  	}
  	endShape()

  	stroke(200,50,100)
  	for(c=1;c<table.getRowCount();c++){
  	var r=5
  	var noty = table.getNum(c,r)
  	indtotal.push(noty)	
  	}
  	
  	beginShape()
  	for (i=1;i<indtotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-indtotal[i]*3)
  	}
  	endShape()

  	stroke(30,50,100)
  	for(c=1;c<table.getRowCount();c++){
  	var r=6
  	var noty = table.getNum(c,r)
  	pkstotal.push(noty)	
  	}
  	
  	beginShape()
  	for (i=1;i<pkstotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-pkstotal[i]*3)
  	}
  	endShape()

  	stroke(30,50,30)
  	for(c=1;c<table.getRowCount();c++){
  	var r=7
  	var noty = table.getNum(c,r)
  	nktotal.push(noty)	
  	}
  	
  	beginShape()
  	for (i=1;i<nktotal.length;i++){
  	noFill()
  	vertex(i*colWidth,height/2-nktotal[i]*3)
  	}
  	endShape()

for(k=1;k<clock.getRowCount();k++){
	var ddcc = clock.getNum(k,1)
	print(ddcc)
	fill(ddcc*15,45,34)
	rect(k*colWidth,height/2,colWidth,ddcc*10)

}

  }

