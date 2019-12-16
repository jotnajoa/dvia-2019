function preload(){
  total= loadTable('data/totals.csv','csv','header')
  times= loadTable('data/ddc.csv','csv','header')
}

function setup(){
  createCanvas(1500,1000,SVG)
  background(150)
  var x
  var y
  var colWidth = 100
  var rowHeight = 50

  var UStestnum = []
  var RStestnum = []
  var UKtestnum = []
  var FRtestnum = []
  var CHtestnum = []
  var IDtestnum = []
  var PKtestnum = []
  var NKtestnum = []
x=1;
y=1;
var r=1;
var a=0;

for(k=1;k<total.getColumnCount();k++){
  text(total.columns[k],30+k*colWidth,500)
}

while(times.getString(r,1)==times.getString(r+1,1)){
  // for (var r=0; r<times.getRowCount();r++) {
            
      stroke(100,0,0)
      strokeWeight(5)
      UStestnum.push(total.getString(r,1))

      line(30+1*colWidth,400-a*100,30+1*colWidth,400-a*100-UStestnum[a])

      RStestnum.push(total.getString(r,2))
      stroke(100,100,0)
      strokeWeight(5)
      line(30+2*colWidth,400-a*100,30+2*colWidth,400-a*100-RStestnum[a])
      

      UKtestnum.push(total.getString(r,3))
      stroke(100,100,100)
      strokeWeight(5)
      line(30+3*colWidth,400-a*100,30+3*colWidth,400-a*100-UKtestnum[a])

      FRtestnum.push(total.getString(r,4))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+4*colWidth,400-a*100,30+4*colWidth,400-a*100-FRtestnum[a])


      CHtestnum.push(total.getString(r,5))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+5*colWidth,400-a*100,30+5*colWidth,400-a*100-CHtestnum[a])

      IDtestnum.push(total.getString(r,6))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+6*colWidth,400-a*100,30+6*colWidth,400-a*100-IDtestnum[a])

      PKtestnum.push(total.getString(r,7))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+7*colWidth,400-a*100,30+7*colWidth,400-a*100-IDtestnum[a])


      NKtestnum.push(total.getString(r,8))
      stroke(150,10,100)
      strokeWeight(5)
      line(30+8*colWidth,400-a*100,30+8*colWidth,400-a*100-NKtestnum[a])

      text(total.getString(r,0),30,400-a*100)
      r= r+1;
      a=a+1;
      

    }
// print(UStestnum)
 save(''${str(r)}'.svg')
}

