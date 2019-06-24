window.onload = function() {
    getAllData()
    updateTable()
    stg = window.sessionStorage
    console.log(stg);
}


setInterval(function(){ getAllData() }, 2000);


function getAllData() {
    var topicId = document.querySelector(".section-skeleton-header").value;
    var allSelect = document.querySelectorAll("select");
    var allInput = document.querySelectorAll("input");
    var storage = window.sessionStorage;
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
    storage.setItem(topicId, json);
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
     stg = window.sessionStorage
     stg.setItem("topicId",jsonData.id)
     console.log(stg);
     fillTable(jsonData);
     })
     .catch(function(error){
        console.log("failed to retrieve data!",error);
     });
}

function fillTable(jsonData) {
    document.querySelector(".section-skeleton-header").innerHTML = jsonData.name
    document.querySelector(".section-skeleton-header").value = jsonData.id;
    document.querySelector(".meta-div").innerHTML = "<em>" + jsonData.meta + "</em>";
    document.querySelector(".card-body").innerHTML = jsonData.bodytext;
}




