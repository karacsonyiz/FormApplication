function showTooltipIfTrue() {
    let selectors = document.querySelectorAll(".E1-select");
    var values = [];
    for (i in selectors) {
        if (selectors[i].value != undefined) {
            values.push(selectors[i].value);
        }
    }
    let hint = document.querySelector(".E1-card-footer");
    let validator = values.every(checkIfAllTrue);
    console.log(validator)
    if (validator === true) {
        document.querySelector(".btn-next").addEventListener('click', navigateToFSection);
        document.querySelector(".btn-prev").addEventListener('click', navigateToDSection);
        hint.setAttribute("style", "display:block;background-color:#4266A1;text-align: center;");
    }
    if (validator === false) {
        document.querySelector(".btn-next").removeEventListener('click', navigateToFSection);
        document.querySelector(".btn-prev").removeEventListener('click', navigateToDSection);
        hint.setAttribute("style", "display:none");
    }
}

function navigateToFSection(){
    window.location.href = "/F.html";
}

function navigateToDSection(){
    window.location.href = "/D.html";
}

function checkIfAllTrue(answer) {
    return answer === "1" || answer === "8" || answer === "9";
}

function e3QuestionChooser() {
    let d2value = document.querySelector(".E2-select").value;
    if (d2value === "1") {
        document.querySelector("#e3-question-header-text-2").setAttribute("style", "display:none");
        document.querySelector("#e3-question-header-text-1").setAttribute("style", "display:block");
    }
    if (d2value !== "1") {
        document.querySelector("#e3-question-header-text-1").setAttribute("style", "display:none");
        document.querySelector("#e3-question-header-text-2").setAttribute("style", "display:block");
    }
}