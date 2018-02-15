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
        crc2.lineTo(800, 50);//oben rechts
        crc2.lineTo(200, 50);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Deckel
        crc2.beginPath();
        crc2.moveTo(100, 250); //links
        crc2.lineTo(200, 50); //rechts
        crc2.lineTo(600, 10); //oben
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
    }
}