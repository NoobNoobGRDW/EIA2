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
    document.addEventListener("keydown", handleKeyDown);
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
        Spiel.crc2.moveTo(70, 550); //links 
        Spiel.crc2.lineTo(930, 550); //rechts
        Spiel.crc2.lineTo(910, 320); //oben rechts
        Spiel.crc2.lineTo(90, 320); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Rand links
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(65, 550); //links 
        Spiel.crc2.lineTo(70, 550); //rechts
        Spiel.crc2.lineTo(90, 320); //oben rechts
        Spiel.crc2.lineTo(65, 320); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Rand rechts
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(930, 550); //links 
        Spiel.crc2.lineTo(935, 550); //rechts
        Spiel.crc2.lineTo(935, 320); //oben rechts
        Spiel.crc2.lineTo(910, 320); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Tastenfeld weiss
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(250, 530); //links 
        Spiel.crc2.lineTo(750, 530); //rechts
        Spiel.crc2.lineTo(740, 350); //oben rechts
        Spiel.crc2.lineTo(260, 350); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#868585";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#FBFBFB";
        Spiel.crc2.fill();
        //Fuss links
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(150, 600); //links 
        Spiel.crc2.lineTo(190, 600); //rechts
        Spiel.crc2.lineTo(190, 550); //oben rechts
        Spiel.crc2.lineTo(150, 550); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        //Fuss rechts
        Spiel.crc2.beginPath();
        Spiel.crc2.moveTo(810, 600); //links 
        Spiel.crc2.lineTo(850, 600); //rechts
        Spiel.crc2.lineTo(850, 550); //oben rechts
        Spiel.crc2.lineTo(810, 550); //oben links   
        Spiel.crc2.closePath();
        Spiel.crc2.strokeStyle = "#ADACAB";
        Spiel.crc2.stroke();
        Spiel.crc2.fillStyle = "#0F0F0F";
        Spiel.crc2.fill();
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        imageObj.onload = function () {
            context.drawImage(imageObj, 300, 350, 400, 180);
        };
        imageObj.src = 'https://sftp.hs-furtwangen.de/~kuenzlin/EIA1/Semesteraufgabe/SemesteraufgabeBilder/piano-keys.png';
    }
    //Buchstben per Tastatur
    function handleKeyDown(_event) {
        //von links
        if (_event.keyCode == 83) {
            console.log("S");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(305, 530); //links 
            Spiel.crc2.lineTo(355, 530); //rechts
            Spiel.crc2.lineTo(355, 350); //oben rechts
            Spiel.crc2.lineTo(305, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
        else if (_event.keyCode == 68) {
            console.log("D");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(362, 530); //links 
            Spiel.crc2.lineTo(410, 530); //rechts
            Spiel.crc2.lineTo(410, 350); //oben rechts
            Spiel.crc2.lineTo(362, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
        else if (_event.keyCode == 70) {
            console.log("F");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(420, 530); //links 
            Spiel.crc2.lineTo(465, 530); //rechts
            Spiel.crc2.lineTo(465, 350); //oben rechts
            Spiel.crc2.lineTo(420, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
        else if (_event.keyCode == 71) {
            console.log("G");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(475, 530); //links 
            Spiel.crc2.lineTo(522, 530); //rechts
            Spiel.crc2.lineTo(522, 350); //oben rechts
            Spiel.crc2.lineTo(475, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
        else if (_event.keyCode == 72) {
            console.log("H");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(534, 530); //links 
            Spiel.crc2.lineTo(580, 530); //rechts
            Spiel.crc2.lineTo(580, 350); //oben rechts
            Spiel.crc2.lineTo(534, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
        else if (_event.keyCode == 74) {
            console.log("J");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(590, 530); //links 
            Spiel.crc2.lineTo(637, 530); //rechts
            Spiel.crc2.lineTo(637, 350); //oben rechts
            Spiel.crc2.lineTo(590, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
        else if (_event.keyCode == 75) {
            console.log("K");
            Spiel.crc2.beginPath();
            Spiel.crc2.moveTo(648, 530); //links 
            Spiel.crc2.lineTo(692, 530); //rechts
            Spiel.crc2.lineTo(690, 350); //oben rechts
            Spiel.crc2.lineTo(645, 350); //oben links   
            Spiel.crc2.closePath();
            Spiel.crc2.globalAlpha = 0.5;
            Spiel.crc2.fillStyle = "#A9F5A9";
            Spiel.crc2.fill();
        }
    }
})(Spiel || (Spiel = {}));
