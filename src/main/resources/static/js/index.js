window.onload = function(){
    getUser();
}

function getUser() {
        fetch("api/user")
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                storage = window.sessionStorage;
                storage.setItem("username", jsonData.name);
                storage.setItem("userid", jsonData.id);
                console.log(storage)
            }).catch(error => console.log(error));
}

function setUserName(jsonData){
    showAdminMenu(jsonData);
    let username = document.querySelector("#username");
    username.innerHTML = "Üdvözöllek, " + jsonData.name + "!";
    let usermenu = document.querySelector("#usermenu");
    usermenu.innerHTML = "Munkalista";
    showAdminMenu(jsonData);
}



function startNewForm(){
        let storage = window.sessionStorage;
        console.log(storage)
        let osap_num = "2201"
        let form = {
                           "osap_num": osap_num
                       }

        fetch("api/createform", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                                },
                        body: JSON.stringify(form)
               }).then(function(response) {
                          return response.json();
                      })
                      .then(function(jsonData) {
                          console.log(jsonData);
                      })
                  .catch(error => console.log(error));
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





$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})