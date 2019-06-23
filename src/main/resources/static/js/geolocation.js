function GeolocationSuccess(position) {
storage = window.sessionStorage;
    var now = new Date();
    var latitude = position.coords.latitude;
    storage.setItem("latitude",latitude)
    var longitude = position.coords.longitude;
    var geolocText = "latitude: " + latitude + "longitude: " + longitude;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(geolocText + "NOW : " + dateTime)

    storage.setItem("userstring",geolocText + " | " + dateTime)
    storage.setItem("geolocation",geolocText)
    storage.setItem("dateTime",dateTime)
}






function GeolocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            console.log("An unknown error occurred.");
            break;
    }
}


function getCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(GeolocationSuccess, GeolocationError);
    } else {
        alert("A böngésző nem támogatja a tartózkodási hely lekérdezését.");
        console.log("A böngésző nem támogatja a tartózkodási hely lekérdezését.");
    }
}
getCoordinates()
setInterval(function(){ getCoordinates() }, 60000);


