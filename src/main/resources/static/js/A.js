$(document).ready(function () {

    $('#HH_1').val('1');
    $('#HH_1').on('change', function (event) {

        console.log($('#HH_1').val());
        $('#table-a2').children().remove();
        let rows = $(event.target).val();
        for (let i = 0; i < rows - 1; i++) {
            addRowOnChange();

        }
    });
});


window.onload = kozfoglalkoztatott();

function isItHungaryCountry() {
    let option = document.querySelector("#BIRTHPLACE").value;
    console.log(option);
    let hiddenDiv = document.querySelector(".hidden-country");
    console.log(hiddenDiv);
    if (option == 2) {
        hiddenDiv.setAttribute("style", "float: right; display: block;");
        console.log("belépett");
    }
    if (option != 2) {
        hiddenDiv.setAttribute("style", "float: right; display: none;");
        console.log("nem");
    }
}

function isItHungaryCitizen() {
    let option = document.querySelector("#CITIZEN").value;
    console.log(option);
    let hiddenDiv = document.querySelector(".hidden-citizen");
    console.log(hiddenDiv);
    if (option == 2) {
        hiddenDiv.setAttribute("style", "float: right; display: block;");
        console.log("belépett");
    }
    if (option != 2) {
        hiddenDiv.setAttribute("style", "float: right; display: none;");
        console.log("nem");
    }
}

function isItHungaryBirthplacefath() {
    let option = document.querySelector("#BIRHTPLACEFATH").value;
    console.log(option);
    let hiddenDiv = document.querySelector(".hidden-birthplacefath");
    console.log(hiddenDiv);
    if (option == 2) {
        hiddenDiv.setAttribute("style", "float: right; display: block;");
        console.log("belépett");
    }
    if (option != 2) {
        hiddenDiv.setAttribute("style", "float: right; display: none;");
        console.log("nem");
    }
}

function isItHungaryBirthplacemonth() {
    let option = document.querySelector("#BIRHTPLACEMOTH").value;
    console.log(option);
    let hiddenDiv = document.querySelector(".hidden-birthplacemonth");
    console.log(hiddenDiv);
    if (option == 2) {
        hiddenDiv.setAttribute("style", "float: right; display: block;");
        console.log("belépett");
    }
    if (option != 2) {
        hiddenDiv.setAttribute("style", "float: right; display: none;");
        console.log("nem");
    }
}

function focusnext(keypusheddown, nextfield) {
    var codeofkey;

    if (window.event) {
        codeofkey = window.event.keyCode;
    } else {
        codeofkey = keypusheddown.keyCode;
    }

    if (codeofkey == 13) {
        document.getElementById(nextfield).focus();
    }
}

function kozfoglalkoztatott() {
    var table = document.querySelector("#table-a")
    var tr = document.createElement("TR");
    tr.id = "01-a";
    var td = document.createElement("TD");
    td.setAttribute("colspan", "5");
    var tdSelect = document.createElement("TD");
    td.innerHTML = `Közfoglalkoztatott-e?`;
    td.setAttribute("align", "right");
    tdSelect.innerHTML = `
    <select name="" id="" width="90%">
        <option selected disabled hidden style="display: none">válasszon</option>
        <option value="1">igen</option>
        <option value="2">nem</option>
        <option value="8">nem tudom</option>
        <option value="9">nem kívánok válaszolni</option>
    </select>`;
    tdSelect.setAttribute("align", "center");
    tr.appendChild(td);
    tr.appendChild(tdSelect);
    var gazdasagiAktivitas = document.getElementById('HH_7_1');

    gazdasagiAktivitas.addEventListener("change", function () {

        if (gazdasagiAktivitas.value == 1 ||
            gazdasagiAktivitas.value == 2 ||
            gazdasagiAktivitas.value == 5 ||
            gazdasagiAktivitas.value == 6) {
            table.appendChild(tr);
        } else {
            var trk = document.getElementById('01-a');
            table.removeChild(trk);
        }
    });
}

var counter = 1;

const addRowOnChange = () => {

    counter++;
    let table = document.querySelector("#table-a2");

    var tr = document.createElement("TR");

    var tdFirth = document.createElement("TD");
    tdFirth.innerHTML = `<input type="text" align="middle" name="" class="elso" id="HH_2_` + counter + `">`;
    tdFirth.setAttribute("style", "width:10%");
    tr.appendChild(tdFirth);

    var tdSecond = document.createElement("TD");
    tdSecond.innerHTML = `<select name="" class="masodik" id="HH_3_` + counter + `">
		<option selected disabled hidden style="display: none">válasszon</option>
		<option value="1">férfi</option>
		<option value="2">nő</option>
	</select>`;
    tdSecond.setAttribute("style", "width:10%");
    tr.appendChild(tdSecond);

    var tdThird = document.createElement("TD");
    tdThird.innerHTML = `<select name="" class="harmadik" id="HH_4_` + counter + `">
		<option selected disabled hidden style="display: none">válasszon</option>
		<option value="01">válaszadó</option>
		<option value="02">házastársa, bejegyzett élettársa</option>
		<option value="03">élettársa</option>
		<option value="04">gyermeke (nevelt, örökbefogadott is)</option>
		<option value="05">gyermeke házastársa, élettársa</option>
		<option value="06">unokája</option>
		<option value="07">szülője</option>
		<option value="08">anyósa/apósa</option>
		<option value="09">testvére</option>
		<option value="10">egyéb rokona</option>
		<option value="11">nem rokona</option>
		<option value="88">nem tudom</option>
		<option value="99">nem kívánok válaszolni</option>
	</select>`;
    tdThird.setAttribute("style", "width:20%");
    tr.appendChild(tdThird);

    var tdFourth = document.createElement("TD");
    tdFourth.innerHTML = `<input type="date" name="" class="negyedik" id="HH_5_` + counter + `">`;
    tdFourth.setAttribute("style", "width:15%");
    tr.appendChild(tdFourth);


    var tdFifth = document.createElement("TD");
    tdFifth.innerHTML = `<select name="" class="otodik" id="HH_6_` + counter + `">
		<option selected disabled hidden style="display: none">válasszon</option>
		<option value="00">általános iskola 4. évfolyamánál kevesebb</option>
		<option value="01">általános iskola 4-7. évfolyama</option>
		<option value="02">általános iskola 8. évfolyama</option>
		<option value="03">szakiskolai (szakmunkásképző iskolai) szakképesítést igazoló
			bizonyítvány</option>
		<option value="04">befejezett középiskola (szakközép, gimnázium) érettségi nélkül
		</option>
		<option value="05">szakközépiskolai szakképesítést igazoló érettségi</option>
		<option value="06">középiskolai (gimnáziumi, szakközépiskolai) általános érettségi
		</option>
		<option value="07">középiskolai végzettséget (érettségit) követő képzésben szerzett
			szakképesítést igazoló bizonyítvány</option>
		<option value="08">iskolai rendszerű felsőfokú (felsőoktatási) szakképzésben
			szerzett bizonyítvány</option>
		<option value="09">főiskolai oklevél vagy felsőfokú alapképzésben (BA/BSc) szerzett
			oklevél</option>
		<option value="10">egyetemi diploma, vagy felsőfokú mesterképzésben (MA/MSc)
			szerzett oklevél</option>
		<option value="11">doktori (PhD/DLA) fokozatot igazoló oklevél</option>
		<option value="88">nem tudom</option>
		<option value="99">nem kívánok válaszolni</option>
	</select>`;
    tdFifth.setAttribute("style", "width:25%");
    tr.appendChild(tdFifth);

    var tdSixth = document.createElement("TD");
    tdSixth.innerHTML = `<select name="" class="hatodik" id="HH_7_` + counter + `">
		<option selected disabled hidden style="display: none">válasszon</option>
		<option value="01">teljes munkaidős alkalmazásban álló</option>
		<option value="02">részmunkaidős alkalmazásban álló</option>
		<option value="03">egyéni, társas vállalkozó és segítő családtag teljes munkaidőben
		</option>
		<option value="04">egyéni, társas vállalkozó és segítő családtag részmunkaidőben
		</option>
		<option value="05">alkalmi munkás, napszámos teljes munkaidőben</option>
		<option value="06">alkalmi munkás, napszámos részmunkaidőben</option>
		<option value="07">munkanélküli</option>
		<option value="08">öregségi vagy özvegyi nyugdíjas, korhatár előtti ellátásban
			részesülő</option>
		<option value="09">fogyatékos és/vagy munkaképtelen egészségi okból, rokkantsági v.
			rehabilitációs ellátásban részesülő</option>
		<option value="10">nappali tagozaton tanul</option>
		<option value="11">gyermekgondozási ellátáson van (pl. csed, gyed, gyes, gyet, gyod
			stb.)</option>
		<option value="12">háztartásbeli, ill. családját látja el</option>
		<option value="13">egyéb inaktív</option>
		<option value="88">nem tudom</option>
		<option value="99">nem kívánok válaszolni</option>
	</select>`;
    tdSixth.setAttribute("style", "width:25%");
    tr.appendChild(tdSixth);
    table.appendChild(tr);
}