function GeolocationSuccess(position) {
    var now = new Date();
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var geolocText = "latitude: " + latitude + "<br>longitude: " + longitude + "<br>";
    var dateTime = "Most";
    console.log(geolocText + "NOW : " + dateTime)
    storage = window.sessionStorage;
    storage.setItem("geolocation",geolocText + "NOW : " + dateTime)
    console.log(storage)

}


function GeolocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            Alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            Alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            Alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            Alert("An unknown error occurred.");
            break;
    }
}


function getCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(GeolocationSuccess, GeolocationError);
    } else {
        Alert("A böngésző nem támogatja a tartózkodási hely lekérdezését.");
    }
}

getCoordinates();