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
    let zielBuchstabe;
    function init() {
        for (let i = 65; i <= 90; i++) {
            buchstabenReihe(String.fromCharCode(i));
        }
        schreibeBrief();
    }
    function buchstabenReihe(buchStaben) {
        let div = document.createElement("div");
        div.innerText = buchStaben;
        div.style.backgroundColor = "black";
        div.style.fontSize = "30px";
        div.style.width = "25px";
        div.style.height = "1px";
        div.style.margin = "9px";
        div.style.marginTop = "0px";
        div.style.marginBottom = "35px";
        div.style.display = "inline";
        div.style.textAlign = "center";
        div.id = buchStaben;
        div.className = "letter";
        div.addEventListener("click", mausClick);
        document.body.appendChild(div);
    }
    function schreibeBrief() {
        let papier = document.createElement("div");
        papier.style.backgroundColor = "#d9d9d9";
        papier.style.width = "96%";
        papier.style.height = "800px";
        papier.style.margin = "20px";
        papier.addEventListener("click", platzieren);
        document.body.appendChild(papier);
    }
    function mausClick(_event) {
        let click = _event.target;
        click.style.color = "lightgrey";
        zielBuchstabe = click.id;
        let divs = document.getElementsByClassName("letter");
        for (let i = 0; i < divs.length; i++) {
            if (zielBuchstabe != divs[i].id) {
                divs[i].style.color = "black";
            }
        }
    }
    function platzieren(_event) {
        let box = document.createElement("div");
        box.innerText = zielBuchstabe;
        box.style.color = "hsl(" + Math.random() * 360 + ", 60%, 50%)";
        box.style.fontSize = "40px";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", platzieren);
        box.addEventListener("click", (event) => { loeschen(event, event.altKey); });
        document.body.appendChild(box);
        let clicking = _event.target;
    }
    function loeschen(mouse, alt) {
        if (alt == true) {
            let char = mouse.target;
            document.body.removeChild(char);
        }
    }
})(Aufgabe_9 || (Aufgabe_9 = {}));
