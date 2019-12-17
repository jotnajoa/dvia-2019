function preload(){
  total= loadTable('data/totals.csv','csv','header')
  times= loadTable('data/ddc.csv','csv','header')
}

function setup(){
  createCanvas(1500,4000)
  background(150)
  var x
  var y
  var colWidth = 100
  var rowHeight = 350
  var baseline = 2500

  var UStestnum = []
  var RStestnum = []
  var UKtestnum = []
  var FRtestnum = []
  var CHtestnum = []
  var IDtestnum = []
  var PKtestnum = []
  var NKtestnum = []
  textAlign(CENTER)
x=1;
y=3; // multiplier for the spacing between years
var r=4;
var a=0;

for(k=1;k<total.getColumnCount();k++){
  text(total.columns[k],30+k*colWidth,baseline+100)
}

while(times.getString(r,1)==times.getString(r+1,1)){
	// for (var r=0; r<times.getRowCount();r++) {
			      
      stroke(100,0,0)
      strokeWeight(5)
      UStestnum.push(total.getString(r,1))

      line(30+1*colWidth,baseline-a*rowHeight,30+1*colWidth,baseline-a*rowHeight-y*UStestnum[a])

      RStestnum.push(total.getString(r,2))
      stroke(100,100,0)
      strokeWeight(5)
      line(30+2*colWidth,baseline-a*rowHeight,30+2*colWidth,baseline-a*rowHeight-y*RStestnum[a])
      

      UKtestnum.push(total.getString(r,3))
      stroke(100,100,100)
      strokeWeight(5)
      line(30+3*colWidth,baseline-a*rowHeight,30+3*colWidth,baseline-a*rowHeight-y*UKtestnum[a])

      FRtestnum.push(total.getString(r,4))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+4*colWidth,baseline-a*rowHeight,30+4*colWidth,baseline-a*rowHeight-y*FRtestnum[a])


      CHtestnum.push(total.getString(r,5))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+5*colWidth,baseline-a*rowHeight,30+5*colWidth,baseline-a*rowHeight-y*CHtestnum[a])

      IDtestnum.push(total.getString(r,6))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+6*colWidth,baseline-a*rowHeight,30+6*colWidth,baseline-a*rowHeight-y*IDtestnum[a])

      PKtestnum.push(total.getString(r,7))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+7*colWidth,baseline-a*rowHeight,30+7*colWidth,baseline-a*rowHeight-y*IDtestnum[a])


      NKtestnum.push(total.getString(r,8))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+8*colWidth,baseline-a*rowHeight,30+8*colWidth,baseline-a*rowHeight-y*NKtestnum[a])


      text(total.getString(r,0),30,baseline-a*rowHeight)
      r= r+1;
      a= a+1;
      }

  if(times.getString(r,1)!==times.getString(r+1,1)){

      stroke(100,0,0)
      strokeWeight(5)
      UStestnum.push(total.getString(r,1))

      line(30+1*colWidth,baseline-a*rowHeight,30+1*colWidth,baseline-a*rowHeight-y*UStestnum[a])

      RStestnum.push(total.getString(r,2))
      stroke(100,100,0)
      strokeWeight(5)
      line(30+2*colWidth,baseline-a*rowHeight,30+2*colWidth,baseline-a*rowHeight-y*RStestnum[a])
      

      UKtestnum.push(total.getString(r,3))
      stroke(100,100,100)
      strokeWeight(5)
      line(30+3*colWidth,baseline-a*rowHeight,30+3*colWidth,baseline-a*rowHeight-y*UKtestnum[a])

      FRtestnum.push(total.getString(r,4))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+4*colWidth,baseline-a*rowHeight,30+4*colWidth,baseline-a*rowHeight-y*FRtestnum[a])


      CHtestnum.push(total.getString(r,5))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+5*colWidth,baseline-a*rowHeight,30+5*colWidth,baseline-a*rowHeight-y*CHtestnum[a])

      IDtestnum.push(total.getString(r,6))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+6*colWidth,baseline-a*rowHeight,30+6*colWidth,baseline-a*rowHeight-y*IDtestnum[a])

      PKtestnum.push(total.getString(r,7))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+7*colWidth,baseline-a*rowHeight,30+7*colWidth,baseline-a*rowHeight-y*IDtestnum[a])


      NKtestnum.push(total.getString(r,8))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+8*colWidth,baseline-a*rowHeight,30+8*colWidth,baseline-a*rowHeight-y*NKtestnum[a])

      text(total.getString(r,0),30,baseline-a*rowHeight)
    }
    noFill()
    ellipse(750,3200,500,500)
    fill(200)
    var kvalue = times.getString(r,1)

    var s = map(kvalue,0,60,0,2*PI)
    arc(750,3200,500,500,-1/2*PI,-1/2*PI-s)
    print(s)
    print(kvalue)
}


  


  // var thisYear="1947"

  // for (var r=0; r<times.getRowCount(); r++){
  // 	if (times.getString(r,0)==times.getString(r+1,0)){
  // 		UStestnum.push(total.getNum(r,1))
  // 		RStestnum.push(total.getNum(r,2))
  // 		UKtestnum.push(total.getNum(r,3))
  // 		FRtestnum.push(total.getNum(r,4))
  // 		CHtestnum.push(total.getNum(r,5))
  // 		IDtestnum.push(total.getNum(r,6))
  // 		PKtestnum.push(total.getNum(r,7))
  // 		NKtestnum.push(total.getNum(r,8))
  // 		print(UKtestnum)
  	// }
  	// else{print(NKtestnum)}


	 
  	// }
  // }

