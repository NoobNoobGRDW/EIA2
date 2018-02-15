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
        Spiel.crc2.lineTo(800, 80); //oben rechts
        Spiel.crc2.lineTo(200, 80); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Deckel
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(100, 250); //links 
        Spiel.crc2.lineTo(750, 90); //rechts
        Spiel.crc2.lineTo(800, 10); //oben rechts
        Spiel.crc2.lineTo(200, 50); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Front
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(90, 320); //links 
        Spiel.crc2.lineTo(910, 320); //rechts
        Spiel.crc2.lineTo(900, 250); //oben rechts
        Spiel.crc2.lineTo(100, 250); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Tastenfeld
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(70, 500); //links 
        Spiel.crc2.lineTo(930, 500); //rechts
        Spiel.crc2.lineTo(910, 320); //oben rechts
        Spiel.crc2.lineTo(90, 320); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Rand links
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(65, 500); //links 
        Spiel.crc2.lineTo(70, 500); //rechts
        Spiel.crc2.lineTo(90, 320); //oben rechts
        Spiel.crc2.lineTo(65, 320); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Rand rechts
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(930, 500); //links 
        Spiel.crc2.lineTo(935, 500); //rechts
        Spiel.crc2.lineTo(935, 320); //oben rechts
        Spiel.crc2.lineTo(910, 320); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Tasten von links
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(100, 480); //links 
        Spiel.crc2.lineTo(900, 480); //rechts
        Spiel.crc2.lineTo(870, 420); //oben rechts
        Spiel.crc2.lineTo(130, 420); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#868585";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#FBFBFB";
        Spiel.crc2.fill();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(180, 420);
        Spiel.crc2.lineTo(150, 480);
        Spiel.crc2.lineTo(150, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(230, 420);
        Spiel.crc2.lineTo(202, 480);
        Spiel.crc2.lineTo(202, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(280, 420);
        Spiel.crc2.lineTo(254, 480);
        Spiel.crc2.lineTo(254, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(330, 420);
        Spiel.crc2.lineTo(306, 480);
        Spiel.crc2.lineTo(306, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(380, 420);
        Spiel.crc2.lineTo(358, 480);
        Spiel.crc2.lineTo(358, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(430, 420);
        Spiel.crc2.lineTo(410, 480);
        Spiel.crc2.lineTo(410, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        //Mitte
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(480, 420);
        Spiel.crc2.lineTo(480, 480);
        Spiel.crc2.lineTo(480, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(530, 420);
        Spiel.crc2.lineTo(548, 480);
        Spiel.crc2.lineTo(548, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(580, 420);
        Spiel.crc2.lineTo(600, 480);
        Spiel.crc2.lineTo(600, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(630, 420);
        Spiel.crc2.lineTo(652, 480);
        Spiel.crc2.lineTo(652, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(680, 420);
        Spiel.crc2.lineTo(704, 480);
        Spiel.crc2.lineTo(704, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(730, 420);
        Spiel.crc2.lineTo(756, 480);
        Spiel.crc2.lineTo(756, 480);
        Spiel.crc2.strokeStyle = "#585858";
        Spiel.crc2.stroke();
    }
})(Spiel || (Spiel = {}));
