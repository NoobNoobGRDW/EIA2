/*
Aufgabe: 1
Name: Kuenz,Linus
Matrikel: 256331
Datum: 13.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    //Hintergrund
    crc2.fillStyle = "#ADE0F3";
    crc2.fillRect(0, 0, 800, 600);
    //Berg1
    crc2.beginPath();
    crc2.moveTo(0, 600);
    crc2.lineTo(600, 600);
    crc2.lineTo(300, 50);
    crc2.closePath();
    crc2.strokeStyle = "#F1F7FA";
    crc2.stroke();
    crc2.fillStyle = "#F1F7FA";
    crc2.fill();
    //Berg2
    crc2.beginPath();
    crc2.moveTo(400, 600);
    crc2.lineTo(800, 600);
    crc2.lineTo(600, 150);
    crc2.closePath();
    crc2.strokeStyle = "#F1F7FA";
    crc2.stroke();
    crc2.fillStyle = "#F1F7FA";
    crc2.fill();
    //Sonne
    crc2.beginPath();
    crc2.arc(100, 90, 60, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffff02";
    crc2.fill();
    //Bergschatten1
    crc2.beginPath();
    crc2.moveTo(500, 600);
    crc2.lineTo(600, 600);
    crc2.lineTo(300, 50);
    crc2.closePath();
    crc2.strokeStyle = "#ABABAB";
    crc2.stroke();
    crc2.fillStyle = "#ABABAB";
    crc2.fill();
    //Bergschatten2
    crc2.beginPath();
    crc2.moveTo(570, 600);
    crc2.lineTo(800, 600);
    crc2.lineTo(600, 150);
    crc2.closePath();
    crc2.strokeStyle = "#ABABAB";
    crc2.stroke();
    crc2.fillStyle = "#ABABAB";
    crc2.fill();
    //Boden
    crc2.fillStyle = "#F1F7FA";
    crc2.fillRect(0, 450, 800, 350);
}
