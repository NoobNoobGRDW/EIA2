/*
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", skiPiste);
    let objects = [];
    let skiFahrer = [];
    let snow = [];
    let cloud = [];
    let lift = [];
    var canImg; //initialisiert das Canvas Image
    function skiPiste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Hintergrund
        Aufgabe6.crc2.fillStyle = "#ADE0F3";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 600);
        Aufgabe6.crc2.lineTo(600, 600);
        Aufgabe6.crc2.lineTo(300, 50);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#F1F7FA";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#F1F7FA";
        Aufgabe6.crc2.fill();
        //Berg2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(400, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(600, 150);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#F1F7FA";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#F1F7FA";
        Aufgabe6.crc2.fill();
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(100, 90, 60, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#ffff02";
        Aufgabe6.crc2.fill();
        //Bergschatten1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 600);
        Aufgabe6.crc2.lineTo(600, 600);
        Aufgabe6.crc2.lineTo(300, 50);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#ABABAB";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ABABAB";
        Aufgabe6.crc2.fill();
        //Bergschatten2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(570, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(600, 150);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#ABABAB";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ABABAB";
        Aufgabe6.crc2.fill();
        //Boden
        Aufgabe6.crc2.fillStyle = "#F1F7FA";
        Aufgabe6.crc2.fillRect(0, 290, 800, 450);
        //Wolke
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(650, 90, 40, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(680, 90, 30, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(620, 90, 30, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(710, 90, 20, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        //H�tte
        Aufgabe6.crc2.fillStyle = "#80400C";
        Aufgabe6.crc2.fillRect(230, 280, 130, 70);
        //Dach
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(220, 280);
        Aufgabe6.crc2.lineTo(370, 280);
        Aufgabe6.crc2.lineTo(295, 240);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.strokeStyle = "#ABABAB";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#80400C";
        Aufgabe6.crc2.fill();
        //Tor
        Aufgabe6.crc2.fillStyle = "#303031";
        Aufgabe6.crc2.fillRect(250, 310, 40, 40);
        //Lift.rechts
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 600);
        Aufgabe6.crc2.lineTo(345, 300);
        Aufgabe6.crc2.lineTo(345, 300);
        Aufgabe6.crc2.strokeStyle = "#585858";
        Aufgabe6.crc2.stroke();
        //Lift.links
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 620);
        Aufgabe6.crc2.lineTo(345, 320);
        Aufgabe6.crc2.lineTo(345, 320);
        Aufgabe6.crc2.strokeStyle = "#585858";
        Aufgabe6.crc2.stroke();
        //feste B�ume
        drawTree(150, 400, "#165118");
        drawTree(200, 450, "#165118");
        drawTree(250, 500, "#165118");
        drawTree(110, 300, "#165118");
        drawTree(80, 460, "#165118");
        //B�ume
        function drawTree(_x, _y, _color) {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(_x, _y);
            Aufgabe6.crc2.lineTo(_x + 30, _y + 100);
            Aufgabe6.crc2.lineTo(_x - 30, _y + 100);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = _color;
            Aufgabe6.crc2.fill();
        }
        for (let i = 0; i < 6; i++) {
            let x = 400 + Math.random() * 700;
            let y = 300 + Math.random() * 200;
            drawTriangle(x, y, "#165118");
        }
        function drawTriangle(_x, _y, _color) {
            //B�ume random
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(_x, _y);
            Aufgabe6.crc2.lineTo(_x + 30, _y + 100);
            Aufgabe6.crc2.lineTo(_x - 30, _y + 100);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = _color;
            Aufgabe6.crc2.fill();
        }
        canImg = Aufgabe6.crc2.getImageData(0, 0, 800, 600); //speichert das Canvas Image
        //Startpunkte f�r Schnee
        for (let i = 0; i < 160; i++) {
            let s = new Aufgabe6.Snow(Math.random() * 800, Math.random() * 600, "#ABABAB");
            objects.push(s);
        }
        //Startpunkte f�r Gondeln
        for (let i = 0; i < 1; i++) {
            let l = new Aufgabe6.Lift(0, 0, "#818080");
            objects.push(l);
        }
        //Startpunkte f�r Wolken
        for (let i = 0; i < 1; i++) {
            let c = new Aufgabe6.Cloud(0, 0, "#BDBDBD");
            objects.push(c);
        }
        //Class aufruf Skifahrer
        for (let i = 0; i < 2; i++) {
            let a = new Aufgabe6.skiaaa(265, 350, "hsl(" + Math.random() * 360 + ", 90%, 60%)");
            objects.push(a);
        }
        animiere(); //f�hrt Funktion aus
    }
    function animiere() {
        console.log("Timeout");
        Aufgabe6.crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        Aufgabe6.crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
        //for-Schleife Objects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animiere, 10);
    }
})(Aufgabe6 || (Aufgabe6 = {}));
