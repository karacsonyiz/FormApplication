window.onload = function() {
    stg = window.sessionStorage
    console.log(stg);
    setAnswers = window.location.href()
    setAnswers2 = window.location.href;
    console.log(setAnswers)
    console.log(setAnswers2);

}

function updateTable() {
    let sectionIdFromUrl = window.location.href.split('?')[1];
    console.log(sectionIdFromUrl)
    let section = "api/getsection/" + sectionIdFromUrl ;
     fetch(section)
     .then(function(request) {
        return request.json();
     })
     .then(function(jsonData) {
     console.table(jsonData);
     fillTable(jsonData);
     })
     .catch(function(error){
        console.log("failed to retrieve data!",error);
     });
}

function fillTable(jsonData) {
    document.querySelector(".section-skeleton-header").innerHTML = jsonData.name
    document.querySelector(".meta-div").innerHTML = "<em>" + jsonData.meta + "</em>";
    document.querySelector(".card-body").innerHTML = jsonData.bodytext;
}

function setCardAttributes(){
    card = document.querySelectorAll(".col-sm-4");
    card.setattribute("class","col-sm-4 border-0 m1 p1")
    console.log(card)
}

console.log("sad")

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})