
var map = L.map( 'map', {
  center: [40.4322, 116.57],
  minZoom: 2,
  zoom: 11
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var myURL = jQuery( 'script[src$="location.js"]' ).attr( 'src' ).replace( 'location.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

for ( var i=0; i < markers.data.length; ++i )
{
 L.marker( [markers.data[i].Lat, markers.data[i].Lon], {icon: myIcon} )
  .bindPopup( '<a href="' + markers.data[i].url + '" target="_blank">' + markers.data[i].Name + '</a>' )
  .addTo( map );
}
