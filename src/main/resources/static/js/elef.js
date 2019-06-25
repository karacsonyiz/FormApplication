window.onload = function() {
    stg = window.sessionStorage
    console.log(stg);
    answers = stg
    showAnswers(answers);
}

function showAnswers() {
    console.log("sajt");

}


$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})