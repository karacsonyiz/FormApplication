window.onload = function() {
    updateTable()
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