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
        var Height = prompt("Gew�nschte H�he angeben");
        var heightNum = parseInt(Height);
        var Width = prompt("Gew�nschte Breite angeben");
        var widthNum = parseInt(Width);
        if (numberNum >= 10 && numberNum <= 100) {
            for (var i = 0; i < numberNum; i++) {
                drawRandom(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", heightNum, widthNum); //�bergibt x, y und Farbe
            }
        }
        else {
            window.alert("falsche Eingabe - Eingabe wiederholen");
            init();
        }
    }
    function drawRandom(_x, _y, _color, _width, _height) {
        let div = document.createElement("div"); //erstellt Div
        div.style.width = _width.toString(); //Returns a String of an object
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //zuf�llige Farbe
        document.body.appendChild(div); //html ELement in den Code einf�gen lassen
    }
})(Aufgabe_8 || (Aufgabe_8 = {}));
