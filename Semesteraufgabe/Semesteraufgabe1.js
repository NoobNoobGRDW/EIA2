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
        Semesteraufgabe1.crc2.fillStyle = "#ADE0F3";
        Semesteraufgabe1.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(0, 600);
        Semesteraufgabe1.crc2.lineTo(600, 600);
        Semesteraufgabe1.crc2.lineTo(300, 50);
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#F1F7FA";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#F1F7FA";
        Semesteraufgabe1.crc2.fill();
        //Berg2
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(400, 600);
        Semesteraufgabe1.crc2.lineTo(800, 600);
        Semesteraufgabe1.crc2.lineTo(600, 150);
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#F1F7FA";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#F1F7FA";
        Semesteraufgabe1.crc2.fill();
        //Sonne
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(100, 90, 60, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#ffff02";
        Semesteraufgabe1.crc2.fill();
        //Bergschatten1
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(500, 600);
        Semesteraufgabe1.crc2.lineTo(600, 600);
        Semesteraufgabe1.crc2.lineTo(300, 50);
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#ABABAB";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#ABABAB";
        Semesteraufgabe1.crc2.fill();
        //Bergschatten2
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(570, 600);
        Semesteraufgabe1.crc2.lineTo(800, 600);
        Semesteraufgabe1.crc2.lineTo(600, 150);
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#ABABAB";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#ABABAB";
        Semesteraufgabe1.crc2.fill();
        //Boden
        Semesteraufgabe1.crc2.fillStyle = "#F1F7FA";
        Semesteraufgabe1.crc2.fillRect(0, 290, 800, 450);
        //Wolke
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(650, 90, 40, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#BDBDBD";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(680, 90, 30, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#BDBDBD";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(620, 90, 30, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#BDBDBD";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(710, 90, 20, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#BDBDBD";
        Semesteraufgabe1.crc2.fill();
        //H�tte
        Semesteraufgabe1.crc2.fillStyle = "#80400C";
        Semesteraufgabe1.crc2.fillRect(230, 280, 130, 70);
        //Dach
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(220, 280);
        Semesteraufgabe1.crc2.lineTo(370, 280);
        Semesteraufgabe1.crc2.lineTo(295, 240);
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#ABABAB";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#80400C";
        Semesteraufgabe1.crc2.fill();
        //Tor
        Semesteraufgabe1.crc2.fillStyle = "#303031";
        Semesteraufgabe1.crc2.fillRect(250, 310, 40, 40);
        //Lift.rechts
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(500, 600);
        Semesteraufgabe1.crc2.lineTo(345, 300);
        Semesteraufgabe1.crc2.lineTo(345, 300);
        Semesteraufgabe1.crc2.strokeStyle = "#585858";
        Semesteraufgabe1.crc2.stroke();
        //Lift.links
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(500, 620);
        Semesteraufgabe1.crc2.lineTo(345, 320);
        Semesteraufgabe1.crc2.lineTo(345, 320);
        Semesteraufgabe1.crc2.strokeStyle = "#585858";
        Semesteraufgabe1.crc2.stroke();
        //feste B�ume
        drawTree(150, 400, "#165118");
        drawTree(200, 450, "#165118");
        drawTree(250, 500, "#165118");
        drawTree(110, 300, "#165118");
        drawTree(80, 460, "#165118");
        //B�ume
        function drawTree(_x, _y, _color) {
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.moveTo(_x, _y);
            Semesteraufgabe1.crc2.lineTo(_x + 30, _y + 100);
            Semesteraufgabe1.crc2.lineTo(_x - 30, _y + 100);
            Semesteraufgabe1.crc2.closePath();
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.fillStyle = _color;
            Semesteraufgabe1.crc2.fill();
        }
        for (let i = 0; i < 6; i++) {
            let x = 400 + Math.random() * 700;
            let y = 300 + Math.random() * 200;
            drawTriangle(x, y, "#165118");
        }
        function drawTriangle(_x, _y, _color) {
            //B�ume random
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.moveTo(_x, _y);
            Semesteraufgabe1.crc2.lineTo(_x + 30, _y + 100);
            Semesteraufgabe1.crc2.lineTo(_x - 30, _y + 100);
            Semesteraufgabe1.crc2.closePath();
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.fillStyle = _color;
            Semesteraufgabe1.crc2.fill();
        }
        canImg = Semesteraufgabe1.crc2.getImageData(0, 0, 800, 600); //speichert das Canvas Image
        animiere(); //f�hrt Funktion aus
    }
    function animiere() {
        console.log("Timeout");
        Semesteraufgabe1.crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        Semesteraufgabe1.crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
        //for-Schleife Objects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animiere, 10);
    }
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
