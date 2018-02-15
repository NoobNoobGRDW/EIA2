/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Semesteraufgabe1;
(function (Semesteraufgabe1) {
    window.addEventListener("load", skiPiste);
    let objects = [];
    var canImg; //initialisiert das Canvas Image
    function skiPiste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Semesteraufgabe1.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Vorhang
        Semesteraufgabe1.crc2.fillStyle = "#B91A1A";
        Semesteraufgabe1.crc2.fillRect(0, 0, 1000, 600);
        //Falte1
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(500, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(505, 0, 20, 600);
        //Falte2
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(700, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(705, 0, 20, 600);
        //Falte3
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(750, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(755, 0, 20, 600);
        //B�hne
        Semesteraufgabe1.crc2.fillStyle = "#966534";
        Semesteraufgabe1.crc2.fillRect(0, 400, 1000, 600);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(0, 400, 1000, 5);
        //Verziehrung 
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(100, 400, 50, 5);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(200, 400, 50, 5);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(300, 400, 50, 5);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(400, 400, 50, 5);
        //Boden
        Semesteraufgabe1.crc2.fillStyle = "#B26C2F";
        Semesteraufgabe1.crc2.fillRect(0, 550, 1000, 600);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(0, 550, 1000, 5);
        canImg = Semesteraufgabe1.crc2.getImageData(0, 0, 1000, 600); //speichert das Canvas Image
        animiere(); //f�hrt Funktion aus
    }
    function animiere() {
        console.log("Timeout");
        Semesteraufgabe1.crc2.clearRect(0, 0, 600, 1000); // loescht Hintergrund
        Semesteraufgabe1.crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
        //for-Schleife Objects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animiere, 10);
    }
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
