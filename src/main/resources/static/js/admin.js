window.onload = function() {
    let createuser = document.querySelector(".form-adduser");
    createuser.onclick = handleCreateUser;
    let addjson = document.querySelector("#form-addjson");
    addjson.onclick = handleAddJson;
    console.log(window.sessionStorage);
    updateTable();
}

function updateTable() {
    //let productIdFromUrl = window.location.href.split('=')[1];
    let section = "api/getsection/" + "D" ;
     fetch(section)
     .then(function(request) {
        return request.json();
     })
     .then(function(jsonData) {
     console.table(jsonData);
     })
     .catch(function(error){
        console.log("failed to retrieve data!",error);
     });
}

function handleAddJson() {
            console.log(storage);
             fetch("api/createdata", {
                         method: "POST",
                         headers: {
                             "Content-Type": "application/json; charset=utf-8"
                                 },
                         body: JSON.stringify(storage)
                }).then(function(response) {
                           return response.json();
                       })
                       .then(function(jsonData) {
                           console.log(jsonData);
                       })
                       .catch(error => console.log(error));
                   return false;
}

function handleCreateUser() {
    let name = document.querySelector("#user-name").value;
    let password = document.querySelector("#user-password").value;
    let user = {
                   "name": name,
                   "password": password,
               }
     fetch("api/createuser", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json; charset=utf-8"
                         },
                 body: JSON.stringify(user)
        }).then(function(response) {
                   return response.json();
               })
               .then(function(jsonData) {
                   console.log(jsonData);
               })
               .catch(error => console.log(error));
           return false;
}

