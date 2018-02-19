/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Spiel {


    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", piano);
    document.addEventListener("keydown", handleKeyDown);


    let objects: MovingObjects[] = [];




    var canImg: any; //initialisiert das Canvas Image


    function piano() {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");

        //Hintergrund
        crc2.fillStyle = "#B26C2F";
        crc2.fillRect(0, 0, 1000, 600);

        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 20, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 70, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 130, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 200, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 280, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 370, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 470, 1000, 2);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 580, 1000, 2);

        //Klavier
        //Rumpf
        crc2.beginPath();
        crc2.moveTo(100, 250);//links 
        crc2.lineTo(900, 250);//rechts
        crc2.lineTo(800, 80);//oben rechts
        crc2.lineTo(200, 80);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Deckel
        crc2.beginPath();
        crc2.moveTo(100, 250);//links 
        crc2.lineTo(750, 90);//rechts
        crc2.lineTo(800, 10);//oben rechts
        crc2.lineTo(200, 50);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Front
        crc2.beginPath();
        crc2.moveTo(90, 320);//links 
        crc2.lineTo(910, 320);//rechts
        crc2.lineTo(900, 250);//oben rechts
        crc2.lineTo(100, 250);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Tastenfeld
        crc2.beginPath();
        crc2.moveTo(70, 550);//links 
        crc2.lineTo(930, 550);//rechts
        crc2.lineTo(910, 320);//oben rechts
        crc2.lineTo(90, 320);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Rand links
        crc2.beginPath();
        crc2.moveTo(65, 550);//links 
        crc2.lineTo(70, 550);//rechts
        crc2.lineTo(90, 320);//oben rechts
        crc2.lineTo(65, 320);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Rand rechts
        crc2.beginPath();
        crc2.moveTo(930, 550);//links 
        crc2.lineTo(935, 550);//rechts
        crc2.lineTo(935, 320);//oben rechts
        crc2.lineTo(910, 320);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Tastenfeld weiss
        crc2.beginPath();
        crc2.moveTo(250, 530);//links 
        crc2.lineTo(750, 530);//rechts
        crc2.lineTo(740, 350);//oben rechts
        crc2.lineTo(260, 350);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#868585";
        crc2.stroke();
        crc2.fillStyle = "#FBFBFB";
        crc2.fill();


        //Fuss links
        crc2.beginPath();
        crc2.moveTo(150, 600);//links 
        crc2.lineTo(190, 600);//rechts
        crc2.lineTo(190, 550);//oben rechts
        crc2.lineTo(150, 550);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();

        //Fuss rechts
        crc2.beginPath();
        crc2.moveTo(810, 600);//links 
        crc2.lineTo(850, 600);//rechts
        crc2.lineTo(850, 550);//oben rechts
        crc2.lineTo(810, 550);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();

        var context = canvas.getContext('2d');
        var imageObj = new Image();

        imageObj.onload = function() {
            context.drawImage(imageObj, 300, 350, 400, 180);
        };
        imageObj.src = 'https://sftp.hs-furtwangen.de/~kuenzlin/EIA1/Semesteraufgabe/SemesteraufgabeBilder/piano-keys.png';


    }

    //Buchstben per Tastatur
    function handleKeyDown(_event: KeyboardEvent): void {


        //von links
        if (_event.keyCode == 83) {
            console.log("S");

            crc2.beginPath();
            crc2.moveTo(305, 530);//links 
            crc2.lineTo(355, 530);//rechts
            crc2.lineTo(355, 350);//oben rechts
            crc2.lineTo(305, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }

        else if (_event.keyCode == 68) {
            console.log("D");

            crc2.beginPath();
            crc2.moveTo(362, 530);//links 
            crc2.lineTo(410, 530);//rechts
            crc2.lineTo(410, 350);//oben rechts
            crc2.lineTo(362, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }

        else if (_event.keyCode == 70) {
            console.log("F");

            crc2.beginPath();
            crc2.moveTo(420, 530);//links 
            crc2.lineTo(465, 530);//rechts
            crc2.lineTo(465, 350);//oben rechts
            crc2.lineTo(420, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }
        else if (_event.keyCode == 71) {
            console.log("G");

            crc2.beginPath();
            crc2.moveTo(475, 530);//links 
            crc2.lineTo(522, 530);//rechts
            crc2.lineTo(522, 350);//oben rechts
            crc2.lineTo(475, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }

        else if (_event.keyCode == 72) {
            console.log("H");

            crc2.beginPath();
            crc2.moveTo(534, 530);//links 
            crc2.lineTo(580, 530);//rechts
            crc2.lineTo(580, 350);//oben rechts
            crc2.lineTo(534, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }

        else if (_event.keyCode == 74) {
            console.log("J");

            crc2.beginPath();
            crc2.moveTo(590, 530);//links 
            crc2.lineTo(637, 530);//rechts
            crc2.lineTo(637, 350);//oben rechts
            crc2.lineTo(590, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }

        else if (_event.keyCode == 75) {
            console.log("K");

            crc2.beginPath();
            crc2.moveTo(643, 530);//links 
            crc2.lineTo(692, 530);//rechts
            crc2.lineTo(692, 350);//oben rechts
            crc2.lineTo(643, 350);//oben links   
            crc2.closePath();
            crc2.fillStyle = "#A9F5A9";
            crc2.fill();
        }


    }

}