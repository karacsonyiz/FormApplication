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
                setUserMenu(jsonData);
            }).catch(error => setGuestMenu());
}
function setGuestMenu(){
    let username = document.querySelector("#username");
    username.innerHTML = "Hello Vendég";
}

function setUserMenu(jsonData){
    let username = document.querySelector("#username");
    let usermenu = document.querySelector("#usermenu");
        if(jsonData.role === "ROLE_ADMIN"){
        document.querySelector("#adminpagebutton").innerHTML = "Admin Felület";
    } else if(jsonData.role === "ROLE_USER" ){
        username.innerHTML = "Hello, " + jsonData.name + "!";
        usermenu.innerHTML = "Munkalista";
    }
}

function showAdminMenu(jsonData){
    if(jsonData.role === "ROLE_ADMIN"){
    document.querySelector("#adminpagebutton").innerHTML = "Admin Felület";
    document.querySelector("#adminpagebutton").setAttribute("style","color : white");
    }
}