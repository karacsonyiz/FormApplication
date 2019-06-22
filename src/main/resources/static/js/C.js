window.onload = hideIrrelevantQuestions();

function hideIrrelevantQuestions() {

    var pl1 = document.querySelector("#PL1");
    var pl3 = document.querySelector("#PL3");
    var pl4 = document.querySelector("#PL4");
    var option1pl2 = document.getElementById("1-PL2");
    var option2pl2 = document.getElementById("2-PL2");
    var option1Pl34 = document.getElementById("4-1-PL3");
    var option2Pl34 = document.getElementById("4-2-PL3");
    var option1Pl35 = document.getElementById("5-1-PL3");
    var option2Pl35 = document.getElementById("5-2-PL3");
    var c2 = document.querySelector(".C2-body");
    var c4 = document.querySelector(".C4-body");
    var c5 = document.querySelector(".C5-body");

    c2.style.display = "none"
    c4.style.display = "none"
    c5.style.display = "none"

    pl1.addEventListener('click', function () {
        if (pl1.value == "1") {
            option2pl2.style.display = "none";
            option1pl2.style.display = "block";
            c2.style.display = "block";
        } else if (pl1.value == "2" || pl1.value == "8" || pl1.value == "9") {
            option1pl2.style.display = "none";
            option2pl2.style.display = "block";
            c2.style.display = "block";
        } else if (pl1.value == "3") {
            c2.style.display = "none";
        }
    });

    pl3.addEventListener('click', function () {
        if (pl3.value == "1") {
            option2Pl34.style.display = "none";
            option1Pl34.style.display = "block";
            option2Pl35.style.display = "none";
            option1Pl35.style.display = "block";
            c4.style.display = "block";
            //c2.style.display = "block";
        } else if (pl3.value == "2" || pl3.value == "8" || pl3.value == "9") {
            option1Pl34.style.display = "none";
            option2Pl34.style.display = "block";
            option1Pl35.style.display = "none";
            option2Pl35.style.display = "block";
            c4.style.display = "block";
        } else if (pl3.value == "3") {
            c4.style.display = "none";
            c5.style.display = "none";
        }
    });

    pl4.addEventListener('click', function () {
        if (pl4.value == "1" || pl4.value == "2" || pl4.value == "3" || pl4.value == "8" || pl4.value == "9") {
            c5.style.display = "block"
        } else if (pl4.value == "4") {
            c5.style.display = "none";
        }
    })
}