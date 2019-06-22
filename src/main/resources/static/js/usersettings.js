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
                setUserName(jsonData);
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

function showAdminMenu(jsonData){
    if(jsonData.role === "ROLE_ADMIN"){
    document.querySelector("#adminpagebutton").innerHTML = "Admin Felület";
    document.querySelector("#adminpagebutton").setAttribute("style","color : white");
    }
}