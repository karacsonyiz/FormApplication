//Oldalirányú lapozás kérdések között #1//
$(document).ready(() => {
    $('.expand-button').click((event) => {
        $('.expanding-section.closed').toggleClass('open');
    });

    $('.btn-next').on('click', getNext);
    $('.btn-prev').on('click', getPrevious);
    //document.querySelector(".btn-next").addEventListener('click', getNext)
    //document.querySelector(".btn-prev").addEventListener('click', getPrevious)

    /* radio button with textfield functions */

    // Transfers the input field's value to the radio button.
    $('.radio-text-field').on('change', () => {
        $('.text-radio:visible').val($('.radio-text-field:visible').val());
        console.log($('.text-radio:visible').val()); // May be deleted.
    });

    $('.radio-text-field').prop('disabled', true);

    $('.text-radio').on('click', () => {
        $('.radio-text-field').prop('disabled', false);
    });

    $('.non-text-radio').on('click', () => {
        $('.radio-text-field').prop('disabled', true);
    });
    /* radio button with textfield functions end  */

});

//////////

//Oldalirányú lapozás kérdések között #2//
const getNext = () => {
    let current = $('.question-card-body:visible');
    let next = (current.next().length) ? current.next() : $('.question-card .question-card-body').first();

    current.css('display', 'none');
    next.css('display', 'block');
}
const getPrevious = () => {
    let current = $('.question-card-body:visible');
    let next = (current.prev().length) ? current.prev() : $('.question-card .question-card-body').last();

    current.css('display', 'none');
    next.css('display', 'block');
}
//////////

//Tooltip aktivizálás//
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
//////////

function GeolocationSuccess(position) {
    storage = window.sessionStorage;
    var now = new Date();
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var geolocText = "latitude: " + latitude + "longitude: " + longitude;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(geolocText + " | " + dateTime)

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
setInterval(function(){ getCoordinates() }, 15000);






