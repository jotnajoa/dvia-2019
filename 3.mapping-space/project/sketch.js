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
var deno = 100000
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
// var lat;
// var lng;



// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month.csv", "csv", "header");
}

function setup() {

    mycanvas = createCanvas(1000,600)
    // background(200)
    mycanvas.position(800,0)
    myslider= createSlider(1,1000000,500000)
    myslider.position(900,45)
    myslider2=createSlider(1,100,5)
    myslider2.position(1300,45)
    mytext1 = createP('Size of city')
    mytext1.position(800,25)
    mytext5 = createP('distance scale')
    mytext5.position(1200,25)
    mytext2 = createP('Proximity')
    mytext2.position(800,60)
    // mytext3 = createP('Proximity')
    // mytext3.position(800,200)
    lc1=400
    mytext4 = createP('Population Affected')
    mytext4.position(800,lc1)

    
    // first, create a leaflet map (look in the html's style tag to set its dimensions)
    mymap = L.map('quake-map').setView([51.505, -0.09], 3);

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

        // circle.bindPopup("i am a circle")
        // circle.on('click', function(e){
        // var coord = e.latlng;
        // var lat = coord.lat;
        // var lng = coord.lng;
        // var magi = row.getNum('mag')
        // console.log(magi);

        // });

}
        // getting lat/lng info of the point i clicked
        mymap.on('click', function(e){
        if (newMarker) {
        mymap.removeLayer(newMarker);
        }
        background(255)

        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        latlngs=[lat,lng];
        newMarker = new L.marker(e.latlng).addTo(mymap);
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
        text(closestBigCities[0].name,100,lc2)
        text(closestBigCities[1].name,300,lc2)
        text(closestBigCities[2].name,500,lc2)
        text(closestBigCities[3].name,700,lc2)
        text(closestBigCities[4].name,900,lc2)
        pop()
        latlng1 = [closestBigCities[0].latitude,closestBigCities[0].longitude]
        latlng2 = [closestBigCities[1].latitude,closestBigCities[1].longitude]
        latlng3 = [closestBigCities[2].latitude,closestBigCities[2].longitude]
        latlng4 = [closestBigCities[3].latitude,closestBigCities[3].longitude]
        latlng5 = [closestBigCities[4].latitude,closestBigCities[4].longitude]
        // text(closestBigCities[1].name,150,lc2)
        // text(closestBigCities[2].name,250,lc2)
        // text(closestBigCities[3].name,350,lc2)
        // text(closestBigCities[4].name,450,lc2)

        
        push()
        fill(150,30,0,100)
        lc3=500
        noStroke()

        ellipse(100,lc3,closestBigCities[0].population/deno,closestBigCities[0].population/deno)
        
        ellipse(300,lc3,closestBigCities[1].population/deno,closestBigCities[1].population/deno)
        ellipse(500,lc3,closestBigCities[2].population/deno,closestBigCities[2].population/deno)
        ellipse(700,lc3,closestBigCities[3].population/deno,closestBigCities[3].population/deno)
        ellipse(900,lc3,closestBigCities[4].population/deno,closestBigCities[4].population/deno)
        pop()

        push()
        fill(0,0,0,200)
        text(closestBigCities[4].population,900,lc3)
        text(closestBigCities[0].population,100,lc3)
        text(closestBigCities[1].population,300,lc3)
        text(closestBigCities[2].population,500,lc3)
        text(closestBigCities[3].population,700,lc3)
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
lc5=270
        drawOrientation(lc4, lc5, Direction1, Distance1,closestBigCities[0].name)
        drawOrientation(lc4, lc5, Direction2, Distance2,closestBigCities[1].name)
        drawOrientation(lc4, lc5, Direction3, Distance3,closestBigCities[2].name)
        drawOrientation(lc4, lc5, Direction4, Distance4,closestBigCities[3].name)
        drawOrientation(lc4, lc5, Direction5, Distance5,closestBigCities[4].name)

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

        
        });

       
      



        // place the new dot on the map
  }



function drawOrientation(x, y, direction, distance,cityname){
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
  fill('red')
  noStroke()
  circle(dstX, dstY, 3)
  fill(0)
  text(cityname,dstX,dstY)
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