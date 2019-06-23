function showTooltipIfTrue() {
    let selectors = document.querySelectorAll(".D1-select");
    var values = [];
    for (i in selectors) {
        if (selectors[i].value != undefined) {
            values.push(selectors[i].value);
        }
    }
    let hint = document.querySelector(".D1-card-footer");
    let validator = values.every(checkIfAllTrue);
    console.log(validator)
    if (validator === true) {
        document.querySelector(".btn-next").addEventListener('click', navigateToESection);
        document.querySelector(".btn-prev").addEventListener('click', navigateToCSection);
        hint.setAttribute("style", "display:block;background-color:#4266A1;text-align: center;");
    }
    if (validator === false) {
        document.querySelector(".btn-next").removeEventListener('click', navigateToESection);
        document.querySelector(".btn-prev").removeEventListener('click', navigateToCSection);
        hint.setAttribute("style", "display:none");
    }
}

function navigateToESection(){
    window.location.href = "/E.html";
}

function navigateToCSection(){
    window.location.href = "/C.html";
}

function checkIfAllTrue(answer) {
    return answer === "1" || answer === "8." || answer === "9";
}

function d3QuestionChooser() {
    let d2value = document.querySelector(".D2-select").value;
    if (d2value === "1") {
        document.querySelector("#d3-question-header-text-2").setAttribute("style", "display:none");
        document.querySelector("#d3-question-header-text-1").setAttribute("style", "display:block");
    }
    if (d2value !== "1") {
        document.querySelector("#d3-question-header-text-1").setAttribute("style", "display:none");
        document.querySelector("#d3-question-header-text-2").setAttribute("style", "display:block");
    }
}