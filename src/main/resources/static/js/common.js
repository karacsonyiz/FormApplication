// adatgyűjtő

setInterval(function(){ getAllData() }, 4000);


function getAllData() {
    var topicId = document.querySelector("body").id;
    var allSelect = document.querySelectorAll("select");
    var allInput = document.querySelectorAll("input");
    var storage = window.sessionStorage;
    var dataObj = {};

    for (var i = 0; i < allSelect.length; i++) {
        var key = allSelect[i].getAttribute("data-id");
        var value = allSelect[i].value;
        dataObj[key] = value;
    }

    for (var i = 0; i < allInput.length; i++) {
        var key = null;
        var value = null;
        if (allInput[i].type == "radio" && allInput[i].checked) {
            key = allInput[i].getAttribute("data-id");
            value = allInput[i].value;
        } else if (allInput[i].type != "radio") {
            key = allInput[i].getAttribute("data-id");
            value = allInput[i].value;
        }
        if (key != null) {
            dataObj[key] = value;
        }
    }

    var json = JSON.stringify(dataObj, null, '\t');
    storage.setItem(topicId, json);
    //console.log(storage);

}

//Oldalirányú lapozás kérdések között #1//
$(document).ready(() => {
    $('.expand-button').click((event) => {
        $('.expanding-section.closed').toggleClass('open');
    });

    //$('.btn-next').on('click', getNext);
    //$('.btn-prev').on('click', getPrevious);
    document.querySelector(".btn-next").addEventListener('click', getNext)
    document.querySelector(".btn-prev").addEventListener('click', getPrevious)
    refreshCoutner();

    /* radio button with textfield functions */

    // Transfers the input field's value to the radio button.
    $('.radio-text-field').on('change', () => {
        $('.text-radio:visible').val($('.radio-text-field:visible').val());
        console.log($('.text-radio:visible').val()); // May be deleted.
    });

    $('.radio-text-field').prop('disabled', true);

    $('.text-radio').on('click', () => {
        $('.radio-text-field').prop('disabled', false);
    });

    $('.non-text-radio').on('click', () => {
        $('.radio-text-field').prop('disabled', true);
    });
    /* radio button with textfield functions end  */

    hideEmptyHints();
});

//////////

//Oldalirányú lapozás kérdések között #2//
const getNext = () => {
    let current = $('.question-card-body:visible');
    let next = (current.next().length) ? current.next() : $('.question-card .question-card-body').first();

    current.css('display', 'none');
    next.css('display', 'block');
    refreshCoutner();
}
const getPrevious = () => {
    let current = $('.question-card-body:visible');
    let next = (current.prev().length) ? current.prev() : $('.question-card .question-card-body').last();

    current.css('display', 'none');
    next.css('display', 'block');
    refreshCoutner();
}
//////////

//Tooltip aktivizálás//
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
//////////

//counter
const refreshCoutner = () => {
    let currentNumber = $('.question-card-body:visible').data('order');
    $('.page-counter').html(`${currentNumber}/${$('.card-body:visible>.question-card-body').length}`);
};


//lapozás témák között az utolsó és első oldalról

function switchTopicsOnLastPage() {
    var counter = 1;
    var bodies = document.querySelectorAll(".question-card-body");
    var fwdButton = document.getElementById("question-fwd-button");
    var bckButton = document.getElementById("question-back-button");
    var main = document.querySelector(".main");
    var pageCount = document.createElement("div");
    var topicLetters = "ABCDEFGHIJKLMNOPQRST";
    var actualPosition = document.querySelector("body").id;
    console.log(actualPosition);
    pageCount.innerHTML = counter + " / " + bodies.length;
    pageCount.style.cssText = "position : absolute; bottom : 0; left : 50%; transform : translate(-50%, 0%); font-weight : bold;";

    main.appendChild(pageCount);

    var oldUrl = document.referrer;
    var str = oldUrl.substring(
        oldUrl.lastIndexOf("/") + 1,
        oldUrl.lastIndexOf("."));

    if (topicLetters.indexOf(str) - 1 == topicLetters.indexOf(actualPosition)) {

        for (var i = 0; i < bodies.length - 1; i++) {
            bodies[i].style.cssText = "display : none"
        }
        bodies[bodies.length - 1].style.cssText = "display : block";
        counter = bodies.length;
        pageCount.innerHTML = counter + " / " + bodies.length;
    }

    fwdButton.addEventListener("click", function () {
        counter++;
        pageCount.innerHTML = counter + " / " + bodies.length;
        if (counter > bodies.length) {
            for (var i = 0; i < topicLetters.length; i++) {
                if (topicLetters.charAt(i) == actualPosition && actualPosition != "T") {
                    window.location.href = topicLetters.charAt(i + 1) + ".html"
                } else if (actualPosition == "T") {
                    window.location.href = "finish.html"
                }
            }
        }
    });

    bckButton.addEventListener("click", function () {
        counter--;
        pageCount.innerHTML = counter + " / " + bodies.length;
        if (counter < 1) {
            for (var i = 0; i < topicLetters.length; i++) {
                if (topicLetters.charAt(i) == actualPosition && topicLetters.indexOf(actualPosition) > 0) {
                    window.location.href = topicLetters.charAt(i - 1) + ".html";
                } else if (topicLetters.indexOf(actualPosition) == 0) {
                    window.location.href = "index.html"
                }
            }
        }
    });
}

const hideEmptyHints = () => {
    $('.question-hint').each((index, element) => {
        if ($(element).html() === "") {
            $(element).parent().css('display', 'none');
        }
    });
};