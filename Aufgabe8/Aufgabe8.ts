/* 
Aufgabe: 8
Name: Kuenz,Linus
Matrikel: 256331
Datum: 08.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe_8 {
    
    window.addEventListener("load", init);


    function init(): void {

        var Number: string = prompt("Anzahl zwischen 10 und 100 angeben");
        var numberNum: number = parseInt(Number);               //ParseInt wandelt einen String in eine Zahl um


        if (numberNum >= 10 && numberNum <= 100) {              //Pr�ft ob die Zahl zwischen 10 und 100 liegt
            for (var i: number = 0; i < numberNum; i++) {
                drawRandom(Math.random() * 1000, Math.random() * 800, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 40 , 40); //�bergibt x, y und Farbe
            }
        }
        else {
            window.alert("falsche Eingabe - Eingabe wiederholen");
            init();
        }

    }

    function drawRandom(_x: number, _y: number, _color: string, _width: number, _height: number): void {

        let div: HTMLDivElement = document.createElement("div");        //erstellt Div
        div.style.width = _height + "px";                                
        div.style.height = _width + "px";
        div.style.marginLeft = _x + "px";                               
        div.style.marginTop = _y + "px";
        div.style.backgroundColor = _color;                             //zuf�llige Farbe
        document.body.appendChild(div);                                 //html ELement in den Code einf�gen lassen
    }

}