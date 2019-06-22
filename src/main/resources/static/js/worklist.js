window.onload = function(){
    getUser()
    getWorkList()
}

function getUser() {
        fetch("api/user")
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                setUserName(jsonData);
            }).catch(error => console.log(error));
}

function getWorkList(){
    fetch("api/userforms")
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                setWorkList(jsonData);
    }).catch(error => console.log(error));
}

function setUserName(jsonData){
    let username = document.querySelector("#username");
    username.innerHTML = "Üdvözöllek, " + jsonData.name + "!";
    let usermenu = document.querySelector("#usermenu");
    usermenu.innerHTML = "Munkalista";
}

function setWorkList(jsonData){
    let formlist = document.querySelector(".formlist");
    for(i in jsonData){
        let li = document.createElement("li");
        li.setAttribute("class","list-group-item");
        if(jsonData[i].name == "Európai Lakossági Egészségfelmérés"){
            let a = document.createElement("a");
            a.innerHTML = jsonData[i].name;
            a.setAttribute("href","/index.html")
            li.appendChild(a);
        } else {
                li.innerHTML = jsonData[i].name;

        }
        formlist.appendChild(li);
    }
}