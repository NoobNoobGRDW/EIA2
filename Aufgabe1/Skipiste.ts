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
    crc2.fillRect (0, 0, 800, 600);
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
    crc2.fillRect(0, 290, 800, 450);
    //Wolke
    crc2.beginPath();
    crc2.arc(650, 90, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#F1F7FA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(680, 90, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#F1F7FA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(620, 90, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#F1F7FA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(710, 90, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#F1F7FA";
    crc2.fill();
    //Baum1
    crc2.beginPath();
    crc2.moveTo(600, 480);
    crc2.lineTo(640, 480);
    crc2.lineTo(620, 400);
    crc2.closePath();
    crc2.strokeStyle = "#165118";
    crc2.stroke();
    crc2.fillStyle = "#165118";
    crc2.fill();
    //Baum2
    crc2.beginPath();
    crc2.moveTo(500, 460);
    crc2.lineTo(540, 460);
    crc2.lineTo(520, 400);
    crc2.closePath();
    crc2.strokeStyle = "#165118";
    crc2.stroke();
    crc2.fillStyle = "#165118";
    crc2.fill();
    //Baum3
    crc2.beginPath();
    crc2.moveTo(100, 500);
    crc2.lineTo(140, 500);
    crc2.lineTo(120, 400);
    crc2.closePath();
    crc2.strokeStyle = "#165118";
    crc2.stroke();
    crc2.fillStyle = "#165118";
    crc2.fill();
    //Baum4
    crc2.beginPath();
    crc2.moveTo(40, 530);
    crc2.lineTo(90, 530);
    crc2.lineTo(70, 430);
    crc2.closePath();
    crc2.strokeStyle = "#165118";
    crc2.stroke();
    crc2.fillStyle = "#165118";
    crc2.fill();
    //Baum5
    crc2.beginPath();
    crc2.moveTo(50, 340);
    crc2.lineTo(80, 340);
    crc2.lineTo(60, 250);
    crc2.closePath();
    crc2.strokeStyle = "#165118";
    crc2.stroke();
    crc2.fillStyle = "#165118";
    crc2.fill();
    //Hütte
    crc2.fillStyle = "#80400C";
    crc2.fillRect(250, 300, 100, 40);
    //Dach
    crc2.beginPath();
    crc2.moveTo(240, 300);
    crc2.lineTo(360, 300);
    crc2.lineTo(300, 260);
    crc2.closePath();
    crc2.strokeStyle = "#ABABAB";
    crc2.stroke();
    crc2.fillStyle = "#80400C";
    crc2.fill();
    //Lift.rechts
    crc2.beginPath();
    crc2.moveTo(500, 600);
    crc2.lineTo(300, 300);
    crc2.lineTo(300, 300);
    crc2.strokeStyle = "#585858";
    crc2.stroke();
    //Lift.links
    crc2.beginPath();
    crc2.moveTo(500, 620);
    crc2.lineTo(300, 320);
    crc2.lineTo(300, 320);
    crc2.strokeStyle = "#585858";
    crc2.stroke();
}

