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
// var lat;
// var lng;



// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month.csv", "csv", "header");
}

function setup() {

    mycanvas = createCanvas(800,600)
    background(200)
    mycanvas.position(800,0)
    myslider= createSlider(1,1000000,500000)
    myslider.position(900,50)
    mytext1 = createP('Size of city')
    mytext1.position(800,25)
    mytext2 = createP('Magnitude')
    mytext2.position(800,60)
    mytext1 = createP('Proximity')
    mytext1.position(800,300)
    mytext1 = createP('Population Affected')
    mytext1.position(800,500)

    
    // first, create a leaflet map (look in the html's style tag to set its dimensions)
    mymap = L.map('quake-map').setView([51.505, -0.09], 3);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
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
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: row.getNum('mag') * 10000
        })

        // place the new dot on the map
        circle.addTo(mymap);
        circle.bindPopup("i am a circle")

        circle.on('click', function(e){
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        var magi = row.getNum('mag')
        console.log(magi);
        latlngs.push(lat,lng);
        print(latlngs)
        var closestBigCities = Cities.largerThan(myslider.value()).closestTo(latlngs[i],latlngs[i+1])
        console.log(closest[0])


        });
        // var closestBigCities = Cities.largerThan(myslider.value()).closestTo(lat, lng)
        // console.log(closestBigCities.length)

    }

function draw(){
        
}
// var latlngs = [
//     [45.51, -122.68],
//     [37.77, -122.43],
//     [34.04, -118.2]
// ];
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
// // zoom the map to the polyline
// mymap.fitBounds(polyline.getBounds());

//getting lat/lng info of the point i clicked
// mymap.on('click', function(e){
//   var coord = e.latlng;
//   var lat = coord.lat;
//   var lng = coord.lng;
//   console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
//   });

//getting lat/lng info of the point of the marker i clicked

}

function draw(){
    //gotta ask this
    // for(var k=0; k<row.getNum('mag');k++){
    //     rect(100*k,85,30,10)
    //     fill(30,30,0)
    // }
    
    
    
}