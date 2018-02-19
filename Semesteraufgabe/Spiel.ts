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
        crc2.moveTo(200, 530);//links 
        crc2.lineTo(800, 530);//rechts
        crc2.lineTo(790, 350);//oben rechts
        crc2.lineTo(210, 350);//oben links   
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
            context.drawImage(imageObj, 300, 350, 400, 150);
        };
        imageObj.src = 'https://sftp.hs-furtwangen.de/~kuenzlin/EIA1/Semesteraufgabe/SemesteraufgabeBilder/piano-keys.png';


    }

}