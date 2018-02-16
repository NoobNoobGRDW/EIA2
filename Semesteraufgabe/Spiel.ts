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
        //Tasten von links
        crc2.beginPath();
        crc2.moveTo(100, 530);//links 
        crc2.lineTo(900, 530);//rechts
        crc2.lineTo(870, 420);//oben rechts
        crc2.lineTo(130, 420);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#868585";
        crc2.stroke();
        crc2.fillStyle = "#FBFBFB";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(180, 420);
        crc2.lineTo(150, 530);
        crc2.lineTo(150, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(230, 420);
        crc2.lineTo(202, 530);
        crc2.lineTo(202, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(280, 420);
        crc2.lineTo(254, 530);
        crc2.lineTo(254, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(330, 420);
        crc2.lineTo(306, 530);
        crc2.lineTo(306, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(380, 420);
        crc2.lineTo(358, 530);
        crc2.lineTo(358, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(430, 420);
        crc2.lineTo(410, 530);
        crc2.lineTo(410, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        //Mitte
        crc2.beginPath();
        crc2.moveTo(480, 420);
        crc2.lineTo(475, 530);
        crc2.lineTo(475, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(530, 420);
        crc2.lineTo(535, 530);
        crc2.lineTo(535, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(580, 420);
        crc2.lineTo(598, 530);
        crc2.lineTo(598, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(630, 420);
        crc2.lineTo(652, 530);
        crc2.lineTo(652, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(680, 420);
        crc2.lineTo(704, 530);
        crc2.lineTo(704, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(730, 420);
        crc2.lineTo(756, 530);
        crc2.lineTo(756, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(780, 420);
        crc2.lineTo(808, 530);
        crc2.lineTo(808, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(830, 420);
        crc2.lineTo(860, 530);
        crc2.lineTo(860, 530);
        crc2.strokeStyle = "#585858";
        crc2.stroke();

        //schwarze Tasten von links
        crc2.beginPath();
        crc2.moveTo(178, 480);//links 
        crc2.lineTo(205, 480);//rechts
        crc2.lineTo(215, 420);//oben rechts
        crc2.lineTo(195, 420);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();        
        
        crc2.beginPath();
        crc2.moveTo(328, 480);//links 
        crc2.lineTo(358, 480);//rechts
        crc2.lineTo(365, 420);//oben rechts
        crc2.lineTo(348, 420);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();

        //Mitte
        crc2.beginPath();
        crc2.moveTo(490, 480);//links 
        crc2.lineTo(520, 480);//rechts
        crc2.lineTo(515, 420);//oben rechts
        crc2.lineTo(495, 420);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(655, 480);//links 
        crc2.lineTo(685, 480);//rechts
        crc2.lineTo(670, 420);//oben rechts
        crc2.lineTo(650, 420);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(805, 480);//links 
        crc2.lineTo(835, 480);//rechts
        crc2.lineTo(810, 420);//oben rechts
        crc2.lineTo(790, 420);//oben links   
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
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
    }
    
}