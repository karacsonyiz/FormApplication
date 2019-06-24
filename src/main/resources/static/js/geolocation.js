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


getAllData()
setInterval(function(){ getAllData() }, 20000);

var allDataGathered = {}

function getAllData() {
    console.log(allDataGathered);
    var storage = window.sessionStorage;
    var topicId = storage.getItem("topicId",storage.topicId)
    var allSelect = document.querySelectorAll("select");
    var allInput = document.querySelectorAll("input");

    console.log(topicId)
    console.log(storage)
    console.log(storage)
    console.log(storage)
    var dataObj = {};
    for (var i = 0; i < allSelect.length; i++) {
        var key = allSelect[i].getAttribute("data-id");
        var value = allSelect[i].value;
        dataObj[key] = value;
    }

    for (var i = 0; i < allInput.length; i++) {
        var key = null;
        var value = null;
        if (allInput[i].type == "radio" && allInput[i].checked) {
            key = allInput[i].getAttribute("data-id");
            value = allInput[i].value;
        } else if (allInput[i].type != "radio") {
            key = allInput[i].getAttribute("data-id");
            value = allInput[i].value;
        }
        if (key != null) {
            dataObj[key] = value;
        }


    }

    var json = JSON.stringify(dataObj, null, '\t');
    allDataGathered += dataObj;
    console.log(json)
    storage.setItem(topicId, json);
    console.log(storage);
    console.log(allDataGathered);
    storage.setItem("allDataGathered", allDataGathered);
    console.log(storage);


}


