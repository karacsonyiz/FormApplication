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
    storage = window.sessionStorage;

    for(i in jsonData){
    console.log(jsonData[i]);
        let card = document.createElement("div");
            card.setAttribute("class","card col-3 p-4 m-4 bg-info  rounded-pill");
            card.setAttribute("style","max-width : 400px;transform: scale(1.1);cursor: pointer;");
        let header = document.createElement("div");
            header.setAttribute("class","card-header p-1 bg-transparent border-0");
            let headertext = document.createElement("h5");
            headertext.setAttribute("class","mb-0 headertext text-center justify-content-center");
            headertext.innerHTML = jsonData[i].osap_num + " (ELEF)";
                    header.appendChild(headertext);
                    card.appendChild(header);
            let body = document.createElement("div");
            body.setAttribute("class","card-body rounded p-1 bg-transparent");
            let bodytext = document.createElement("p");
                startdate = jsonData[i].start_date.replace("T", " ")
                bodytext.innerHTML = "Elkezdve: <br>" + startdate + "<br>" +"Azonositó : <br>" + jsonData[i].id;
                console.log(jsonData[i].id);
                    body.appendChild(bodytext);
                    let a = document.createElement("a");
                    a.setAttribute("class","btn btn-success")
                    a.setAttribute("style","right : 50px")
                    a.innerHTML = "Start";
                    a.href = "/ELEF.html" + "?formId=" + jsonData[i].id;
                    a.setAttribute("id",jsonData[i].id)
                    body.appendChild(a)
                    card.appendChild(body);
    formbar.appendChild(card);
    }
}
