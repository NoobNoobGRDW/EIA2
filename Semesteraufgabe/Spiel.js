/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Spiel;
(function (Spiel) {
    window.addEventListener("load", piano);
    let objects = [];
    var canImg; //initialisiert das Canvas Image
    function piano() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Spiel.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Hintergrund
        Spiel.crc2.fillStyle = "#B26C2F";
        Spiel.crc2.fillRect(0, 0, 1000, 600);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 20, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 70, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 130, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 200, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 280, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 370, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 470, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 580, 1000, 2);
        //Klavier
        //Rumpf
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(100, 250); //links 
        Spiel.crc2.lineTo(900, 250); //rechts
        Spiel.crc2.lineTo(800, 50); //oben rechts
        Spiel.crc2.lineTo(200, 50); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Deckel
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(100, 250); //links
        Spiel.crc2.lineTo(200, 50); //rechts
        Spiel.crc2.lineTo(600, 50); //oben rechts
        Spiel.crc2.lineTo(600, 10); //oben links
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
    }
})(Spiel || (Spiel = {}));
