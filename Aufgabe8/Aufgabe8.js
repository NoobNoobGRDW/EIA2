/*
Aufgabe: 8
Name: Kuenz,Linus
Matrikel: 256331
Datum: 08.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe_8;
(function (Aufgabe_8) {
    window.addEventListener("load", init);
    function init() {
        var Number = prompt("Anzahl zwischen 10 und 100 angeben");
        var numberNum = parseInt(Number); //ParseInt wandelt einen String in eine Zahl um
        if (numberNum >= 10 && numberNum <= 100) {
            for (var i = 0; i < numberNum; i++) {
                drawRandom(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 40, 40); //�bergibt x, y und Farbe
            }
        }
        else {
            window.alert("falsche Eingabe - Eingabe wiederholen");
            init();
        }
    }
    function drawRandom(_x, _y, _color, _width, _height) {
        let div = document.createElement("div"); //erstellt Div
        div.style.width = _height + "px"; //Returns a String of an object
        div.style.height = _width + "px";
        div.style.marginLeft = _x + "px"; //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y + "px";
        div.style.backgroundColor = _color; //zuf�llige Farbe
        document.body.appendChild(div); //html ELement in den Code einf�gen lassen
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
