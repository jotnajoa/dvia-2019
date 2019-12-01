// the data loaded from a USGS-provided CSV file
var table;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/all_month.csv", "csv", "header");
}

function setup() {
    strokeWeight(3)
    color(20)
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

var latlngs = [
    [[45.51, -122.68],
     [37.77, -122.43],
     [34.04, -118.2]],
    [[40.78, -73.91],
     [41.83, -87.62],
     [32.76, -96.72]]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
// zoom the map to the polyline
    // step through the rows of the table and add a dot for each event

}