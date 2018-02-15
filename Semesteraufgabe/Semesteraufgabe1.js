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
        //Hintergrund
        Semesteraufgabe1.crc2.fillStyle = "#50504F";
        Semesteraufgabe1.crc2.fillRect(0, 0, 1000, 600);
        //T�r
        Semesteraufgabe1.crc2.fillStyle = "#2E2E2E";
        Semesteraufgabe1.crc2.fillRect(20, 100, 200, 600);
        Semesteraufgabe1.crc2.fillStyle = "#545453";
        Semesteraufgabe1.crc2.fillRect(25, 105, 190, 600);
        //Knauf
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(40, 300, 10, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#2E2E2E";
        Semesteraufgabe1.crc2.fill();
        //Vorhang
        Semesteraufgabe1.crc2.fillStyle = "#B91A1A";
        Semesteraufgabe1.crc2.fillRect(300, 0, 1000, 600);
        //Falte1
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(600, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(605, 0, 20, 600);
        //Falte2
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(750, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(755, 0, 20, 600);
        //Falte3
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(800, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(805, 0, 20, 600);
        //B�hne
        Semesteraufgabe1.crc2.fillStyle = "#966534";
        Semesteraufgabe1.crc2.fillRect(0, 400, 1000, 600);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(0, 400, 1000, 5);
        //Verziehrung 
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(50, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(200, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(350, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(500, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(650, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(800, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(950, 400, 50, 500);
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
