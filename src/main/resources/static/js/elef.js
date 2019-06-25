window.onload = function() {
    storage = window.sessionStorage
    console.log(storage);
    showAnswers(storage);
    AddAnswers(storage)
}

function showAnswers(storage) {
    answerh1 = document.querySelector("#elefanswers");
    answerh1.innerHTML = "";
    if(storage.getItem("topicId") !== null){
        topic = storage.getItem("topicId")
        answerh1.innerHTML +=  topic + " : <br>" + storage.getItem(topic)
    }
    console.log("sajt");
    console.log(answerh1);
}

function AddAnswers() {
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

function showall(){
    storage = window.sessionStorage
    answerh1 = document.querySelector("#elefanswers");
    answerh1.innerHTML = "";
    var sections = ["C","D","E","J","K","L","P","Q","R"]
    for(i in sections){
        if(storage.getItem(sections[i]) !== null){
                topicAnswer = storage.getItem(sections[i])
                answerh1.innerHTML += sections[i] + "<br>" + topicAnswer + "<br>";
        }
    }

    storage.getItem(topic)
    }

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})