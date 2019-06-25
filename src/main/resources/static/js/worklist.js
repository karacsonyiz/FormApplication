window.onload = function(){
    getUser()
}

function getUser() {
        fetch("api/user")
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                setUserName(jsonData);
                getWorkList()

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
    let formbar = document.querySelector(".formbar");
    console.log(formbar);
    console.log(jsonData);
    for(i in jsonData){
    console.log(jsonData[i]);
        let card = document.createElement("div");
            card.setAttribute("class","card col-3 p-4 m-4 bg-info  rounded-pill");
            card.setAttribute("style","max-width : 400px;transform: scale(1.1);cursor: pointer;");
            card.addEventListener("click", function(){
                navigate(jsonData[i].id);
            }, false);
        let header = document.createElement("div");
            header.setAttribute("class","card-header p-1 bg-transparent border-0");
            let headertext = document.createElement("h5");
            headertext.setAttribute("class","mb-0 headertext text-center");
            headertext.innerHTML = jsonData[i].osap_num + " (ELEF)";
                    header.appendChild(headertext);
                    card.appendChild(header);
            let body = document.createElement("div");
            body.setAttribute("class","card-body rounded p-1 bg-transparent");
            let bodytext = document.createElement("p");
                bodytext.innerHTML = "Elkezdve: " + jsonData[i].start_date + "<br>" + "User :" + jsonData[i].userid + "<br>" + "azonositó : <br>" + jsonData[i].id;
                    body.appendChild(bodytext);
                    card.appendChild(body);
    formbar.appendChild(card);
    }
}

function navigate(id){
    window.location.assign("/ELEF.html" + "?" + id)
    }
