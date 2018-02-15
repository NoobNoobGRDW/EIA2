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
        Spiel.crc2.fillRect(0, 370, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 470, 1000, 2);
        Spiel.crc2.fillStyle = "#6A3F16";
        Spiel.crc2.fillRect(0, 580, 1000, 2);
    }
})(Spiel || (Spiel = {}));
