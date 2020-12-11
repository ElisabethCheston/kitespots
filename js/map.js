function initialize() {
    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng (63.2130515, 18.4892165), 
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions); 
}