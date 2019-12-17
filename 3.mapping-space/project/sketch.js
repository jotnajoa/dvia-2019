// the data loaded from a USGS-provided CSV file
var table;
var mycanvas;
var myslider;
var radius
var mytext1;
var mytext2;
var mytext3;
var mytext4;
var row;
var latlngs=[]
var lat;
var lng;
var deno
var lc1;
var lc2;
var lc3;
var lc4;
var lc5;
var latlng0 = []
var latlng1 = []
var latlng2 = []
var latlng3 = []
var latlng4 = []
var latlng5 = []
var newMarker
var circle
var clickmag
var f

var l1x = 0;
var l2x = 450;
var l3x = 900;
var ly = 700;
var l2y= 800;
var l3y = 1000;
var ps = 25;

var bignumber = 4792457240
var millions = bignumber/1000000
var sizename = millions.toFixed(1)
console.log(`${sizename} Million`)
// var lat;
// var lng;



// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month.csv", "csv", "header");
}

function setup() {

    mycanvas = createCanvas(1200,1800)
    colortext()
    description(5,1050)
 
    // background(200)
    mycanvas.position(0,ly-50)
    lc1=400



    mytext0 = createP('Click the city you want to explore')
    mytext0.position(l1x,ly-70)

    mytext1 = createP('SIZE OF CITY')
    mytext1.position(l1x,ly-20)
    myslider= createSlider(1,1000000,500000)
    myslider.position(l1x+120,ly)

    mytext3 = createP('UNITSIZE')
    mytext3.position(l2x,ly-20)
    myslider3=createSlider(10000,100000,20000)
    myslider3.position(l2x+120,ly)

    mytext5 = createP('PIXEL SCALE')
    mytext5.position(l3x,ly-20)
    myslider2=createSlider(1,100,5)
    myslider2.position(l3x+120,ly)


    mytext2 = createP('PROXIMITY')
    mytext2.position(l1x,l2y)

    mytext4 = createP('POPULATION AFFECTED')
    mytext4.position(800,lc1)
    mytext5 = createP('MAGNITUDE (RICHTER)')
    mytext5.position(l2x+100,l2y)

    mytext6 = createP('CITIES AFFECTED')
    mytext6.position(0,l3y+300)

    // mytext3 = createP('Proximity')
    // mytext3.position(800,200)
   



    
    // first, create a leaflet map (look in the html's style tag to set its dimensions)
    mymap = L.map('quake-map').setView([51.505, 30], 3);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 20,
    }).addTo(mymap);

    // step through the rows of the table and add a dot for each event
    for (var i=0; i<table.getRowCount(); i++){
        var row = table.getRow(i)

        // skip over any rows where the magnitude data is missing
        if (row.get('mag')==''){
            continue
        }

        // create a new dot
        var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
            color: 'red',      // the dot stroke color
            fillColor: '#f03', // the dot fill color
            fillOpacity: 0.15,  // use some transparency so we can see overlaps
            radius: row.getNum('mag') * 10000
        })
        circle.addTo(mymap);
        circle.on('click',function(e){
            background(255)
            colortext()
            description(5,1050)
            print(e.latlng.lat)
            var coord = e.latlng;
            var lat = coord.lat;
            var lng = coord.lng;
            var clickmag = e.target.options.radius/10000
            print(clickmag)
            f=map(clickmag,0,6.6,0,300)
            print(f)
            push()
            for(var l=0; l<f;l++){

            line(700,ly-200-l,1100,ly-200-l)
            stroke(l,0,50,[100])
            text(clickmag,670,ly-200-f)
            
        }
            pop()
            

            // rect(400,500,)
            var closest = Cities.closestTo(lat, lng)
            push()
            fill(255)
            text(closest[0].name,lc4,lc5)
            pop()
            drawquakemap()
            cityoncircle()
           

            latlng0= [closest[0].latitude,closest[0].longitude]
            var closestBigCities = Cities.largerThan(myslider.value()).closestTo(lat, lng)
            lc2=560;
            push()
            fill(2)
            textStyle(BOLD)
            textSize(18)
            text(closestBigCities[0].name,100,l3y-120)
            text(closestBigCities[1].name,300,l3y-120)
            text(closestBigCities[2].name,500,l3y-120)
            text(closestBigCities[3].name,700,l3y-120)
            text(closestBigCities[4].name,900,l3y-120)
            pop()
            latlng1 = [closestBigCities[0].latitude,closestBigCities[0].longitude]
            latlng2 = [closestBigCities[1].latitude,closestBigCities[1].longitude]
            latlng3 = [closestBigCities[2].latitude,closestBigCities[2].longitude]
            latlng4 = [closestBigCities[3].latitude,closestBigCities[3].longitude]
            latlng5 = [closestBigCities[4].latitude,closestBigCities[4].longitude]


        push()
        fill(150,30,0,100)
        lc3=800
        noStroke()
        deno=myslider3.value()
        popmap(100,lc3,closestBigCities[0].population/deno,closestBigCities[0].population/deno,100,0,0)
        popmap(300,lc3,closestBigCities[1].population/deno,closestBigCities[1].population/deno,0,100,0)
        popmap(500,lc3,closestBigCities[2].population/deno,closestBigCities[2].population/deno,0,0,100)
        popmap(700,lc3,closestBigCities[3].population/deno,closestBigCities[3].population/deno,100,100,0)
        popmap(900,lc3,closestBigCities[4].population/deno,closestBigCities[4].population/deno,0,100,100)

        // ellipse(100,lc3,closestBigCities[0].population/deno,closestBigCities[0].population/deno)
        // ellipse(300,lc3,closestBigCities[1].population/deno,closestBigCities[1].population/deno)
        // ellipse(500,lc3,closestBigCities[2].population/deno,closestBigCities[2].population/deno)
        // ellipse(700,lc3,closestBigCities[3].population/deno,closestBigCities[3].population/deno)
        // ellipse(900,lc3,closestBigCities[4].population/deno,closestBigCities[4].population/deno)
        pop()

        push()
        fill(0,0,0,200)

        var bignumber = 4792457240
        var millions = bignumber/1000000
        var sizename = millions.toFixed(1)

        var bgnum4= closestBigCities[4].population/1000000
        var bgnum0= closestBigCities[0].population/1000000
        var bgnum1= closestBigCities[1].population/1000000
        var bgnum2= closestBigCities[2].population/1000000
        var bgnum3= closestBigCities[3].population/1000000

        var bglt1 = bgnum1.toFixed(1)
        var bglt2 = bgnum2.toFixed(1)
        var bglt3 = bgnum3.toFixed(1)
        var bglt4 = bgnum4.toFixed(1)
        var bglt0 = bgnum0.toFixed(1)

        console.log(`${sizename} Million`)

        text(`${bglt4} Million`,900,lc3)
        text(`${bglt0} Million`,100,lc3)
        text(`${bglt1} Million`,300,lc3)
        text(`${bglt2} Million`,500,lc3)
        text(`${bglt3} Million`,700,lc3)
        pop()

        var Direction1=measureDirection(latlng0[0],latlng0[1],latlng1[0],latlng1[1])
        var Distance1=measureDistance(latlng0[0],latlng0[1],latlng1[0],latlng1[1])  
        var Direction2=measureDirection(latlng0[0],latlng0[1],latlng2[0],latlng2[1])
        var Distance2=measureDistance(latlng0[0],latlng0[1],latlng2[0],latlng2[1]) 
        var Direction3=measureDirection(latlng0[0],latlng0[1],latlng3[0],latlng3[1])
        var Distance3=measureDistance(latlng0[0],latlng0[1],latlng3[0],latlng3[1])  
        var Direction4=measureDirection(latlng0[0],latlng0[1],latlng4[0],latlng4[1])
        var Distance4=measureDistance(latlng0[0],latlng0[1],latlng4[0],latlng4[1])  
        var Direction5=measureDirection(latlng0[0],latlng0[1],latlng5[0],latlng5[1])
        var Distance5=measureDistance(latlng0[0],latlng0[1],latlng5[0],latlng5[1])   

        lc4=300
        lc5=400
        drawOrientation(lc4, lc5, Direction1, Distance1,100,0,0)
        drawOrientation(lc4, lc5, Direction2, Distance2,0,100,0)
        drawOrientation(lc4, lc5, Direction3, Distance3,0,0,100)
        drawOrientation(lc4, lc5, Direction4, Distance4,100,100,0)
        drawOrientation(lc4, lc5, Direction5, Distance5,0,100,100)

// ,closestBigCities[0].name
// rawOrientation(lc4, lc5, Direction1, Distance1,closestBigCities[0].name)



            })



        // circle.bindPopup("i am a circle")
        // circle.on('click', function(e){
        // var coord = e.latlng;
        // var lat = coord.lat;
        // var lng = coord.lng;
        // var magi = row.getNum('mag')
        // console.log(magi);

        // });
} //<- for middle parenthesis
}
        
        // getting lat/lng info of the point i clicked    
        // text(closestBigCities[1].name,150,lc2)
        // text(closestBigCities[2].name,250,lc2)
        // text(closestBigCities[3].name,350,lc2)
        // text(closestBigCities[4].name,450,lc2)
function draw() {
           
            
            fill(15)
            textSize(15)
            text('0',670,ly-200)
            text('6.5',670,ly-480)



    for(var z = 0; z<40; z++){
        for(var q =0; q<10; q++){
            push()
            strokeWeight(0.1)
            stroke(180,[30])
            line(700+z*10,500-q*30,700+z*10+5,500-q*30)
            pop()

              }
        
        
    }

}
        
       

        



        function measureDistance(srcLat, srcLng, dstLat, dstLng){
        var origin = L.latLng(srcLat, srcLng),
        point = L.latLng(dstLat, dstLng)
        return origin.distanceTo(point) / 1000 // in kilometers
        }

        function measureDirection(srcLat, srcLng, dstLat, dstLng){
        srcLat *= Math.PI / 180
        dstLat *= Math.PI / 180
        srcLng *= Math.PI / 180
        dstLng *= Math.PI / 180
        var y = Math.sin(dstLng - srcLng) * Math.cos(dstLat),
        x = Math.cos(srcLat) * Math.sin(dstLat) -
            Math.sin(srcLat) * Math.cos(dstLat) * Math.cos(dstLng - srcLng);
        return ((Math.atan2(y, x) * 180 / Math.PI) + 360) % 360;
}
// place the new dot on the map



function drawOrientation(x, y, direction, distance,cityr,cityg,cityb){
  // draws a line in the direction of travel whose length is proportional to the distance in km
  var kilometersPerPixel = myslider2.value()

  var d2r = deg => deg * Math.PI/180,
      dstX = x + cos(d2r(direction-90))*(distance/kilometersPerPixel),
      dstY = y + sin(d2r(direction-90))*(distance/kilometersPerPixel);

  // grey dot for starting point
  push()
  noStroke()
  fill(100)
  circle(x,y, 4)
  stroke(100)
  line(x, y, dstX, dstY)
  pop()
  // red dot for destination
  push()
  fill(cityr,cityg,cityb,150)
  noStroke()
  circle(dstX, dstY, 30)
  fill(0)
  // text(cityname,dstX,dstY)
  pop()
}

function drawquakemap(){
    let r = 60
    noFill()
    ellipse(lc4,lc5,r,r)
    ellipse(lc4,lc5,r*2,r*2)
    ellipse(lc4,lc5,r*3,r*3)
    ellipse(lc4,lc5,r*4,r*4)
    ellipse(lc4,lc5,r*5,r*5)
}

function cityoncircle(){
    let p = 60
    push()
    fill(0)
    text(30*(myslider2.value())+'km',lc4+p/4,lc5+p/4)
    text(60*(myslider2.value())+'km',lc4+p/2,lc5+p/2)
    text(90*(myslider2.value())+'km',lc4+p,lc5+p)
    text(120*(myslider2.value())+'km',lc4+p*1.5,lc5+p*1.5)
    text(150*(myslider2.value())+'km >',lc4+p*2,lc5+p*2)
    pop()
}

function popmap(x,y,w,h,fr,fg,fb){
push()
fill(fr,fg,fb,150)
ellipse(x,y,w,h)
pop()
// ellipse(100,lc3,closestBigCities[0].population/deno,closestBigCities[0].population/deno)

}

function  colortext(){
    push()
    fill(207,187,0,80)
    noStroke()
    rect(0,0,width,20)
    pop()

    push()
    fill(150,80)
    noStroke()
    rect(0,ly-535,100,30)
    rect(550,ly-535,220,30)
    rect(0,l2y-130,150,30)
    pop()
}  

function description(x,y){
    push()
    textSize(25)
    textFont('Helvetica')
    textStyle(NORMAL)
    text('More than 143 million Americans living in the 48 contiguous states are exposed to potentially',x,y) 
    text('damaging ground shaking from earthquakes. When the people living in the earthquake-prone',x,y+ps) 
    text('areas of Alaska, Hawaii and U.S. territories are added, this number rises to nearly half of all Americans.',x,y+2*ps) 
    text('Scientists with the USGS published this research online today in the journal Earthquake Spectra.',x,y+3*ps)
    text('“The new exposure estimate is nearly double the previous 2006 estimate of 75 million',x,y+4*ps)
    text('Americans in 39 states, and is attributed to both population growth and advances in science,”',x,y+5*ps)
    text('said William Leith, who is the USGS senior science advisor for earthquake and geologic',x,y+6*ps)
    text('hazards and a co-author of this study. “Populations have grown significantly in areas prone to',x,y+7*ps)
    text('earthquakes, and USGS scientists have improved data and methodologies that allow for more',x,y+8*ps)
    text('accurate estimates of earthquake hazards and ground shaking.”',x,y+9*ps)
    pop()

    push()
    textSize(45)
    textFont('Helvetica')
    textStyle(ITALIC)
    text('"More than 143 million Americans areexposed to',x,y-70)
    text('potentially damaging ground shaking"',x,y-30)
    pop()

    push()
    noStroke()
    fill(207,187,0,80)
    rect(x,y-50,width-x,30)

    rect(x,y-100,width-x,30)
    pop()
}


// var latlngs = [
//     [45.51, -122.68],
//     [37.77, -122.43],
//     [34.04, -118.2]
// ];
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
// // zoom the map to the polyline
// mymap.fitBounds(polyline.getBounds());

//getting lat/lng info of the point of the marker i clicked




// function draw(){
//     //gotta ask this
//     // for(var k=0; k<row.getNum('mag');k++){
//     //     rect(100*k,85,30,10)
//     //     fill(30,30,0)