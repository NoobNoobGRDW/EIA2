/*
Aufgabe: 9
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", init);
    /* document.addEventListener("keydown", handleKeyDown);*/
    var buchStaben;
    let zielLetter;
    function init() {
        for (let i = 65; i <= 90; i++) {
            buchstabenBox(String.fromCharCode(i));
        }
        schreibeBrief();
    }
    function buchstabenBox(buchStaben) {
        let div = document.createElement("div");
        div.innerText = buchStaben;
        div.style.backgroundColor = "cccccc";
        div.style.width = "30px";
        div.style.height = "30px";
        div.style.margin = "9.5px";
        div.style.fontSize = "20px";
        div.style.display = "inline";
        div.style.textAlign = "center";
        div.id = buchStaben;
        div.className = "letter";
        div.addEventListener("click", handleMousedown);
        document.body.appendChild(div);
    }
    function schreibeBrief() {
        let letter = document.createElement("div");
        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "1000px";
        letter.style.margin = "20px";
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }
    function handleMousedown(_event) {
        let click = _event.target;
        click.style.color = "black";
        zielLetter = click.id;
        let divs = document.getElementsByClassName("letter");
        for (let i = 0; i < divs.length; i++) {
            if (zielLetter != divs[i].id) {
                divs[i].style.color = "black";
            }
        }
    }
    function setLetters(_event) {
        let box = document.createElement("div");
        box.innerText = zielLetter;
        box.style.color = "white";
        box.style.fontSize = "40px";
        box.style.border = "2px solid white";
        box.style.padding = "2px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", setLetters);
        document.body.appendChild(box);
        let clicking = _event.target;
    }
    function removeLetterbyAlt(_event) {
        if (_event.altKey == false)
            return;
        else {
            let remove = _event.target;
            document.body.removeChild(remove);
        }
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
