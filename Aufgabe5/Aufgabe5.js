/*
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", skiPiste);
    let skiFahrer = [];
    let snow = [];
    let cloud = [];
    let lift = [];
    var canImg; //initialisiert das Canvas Image
    function skiPiste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe5.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Hintergrund
        Aufgabe5.crc2.fillStyle = "#ADE0F3";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berg1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 600);
        Aufgabe5.crc2.lineTo(600, 600);
        Aufgabe5.crc2.lineTo(300, 50);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#F1F7FA";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#F1F7FA";
        Aufgabe5.crc2.fill();
        //Berg2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(400, 600);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.lineTo(600, 150);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#F1F7FA";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#F1F7FA";
        Aufgabe5.crc2.fill();
        //Sonne
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(100, 90, 60, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#ffff02";
        Aufgabe5.crc2.fill();
        //Bergschatten1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(500, 600);
        Aufgabe5.crc2.lineTo(600, 600);
        Aufgabe5.crc2.lineTo(300, 50);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#ABABAB";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ABABAB";
        Aufgabe5.crc2.fill();
        //Bergschatten2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(570, 600);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.lineTo(600, 150);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#ABABAB";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ABABAB";
        Aufgabe5.crc2.fill();
        //Boden
        Aufgabe5.crc2.fillStyle = "#F1F7FA";
        Aufgabe5.crc2.fillRect(0, 290, 800, 450);
        //Wolke
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(650, 90, 40, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(680, 90, 30, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(620, 90, 30, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(710, 90, 20, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        //H�tte
        Aufgabe5.crc2.fillStyle = "#80400C";
        Aufgabe5.crc2.fillRect(230, 280, 130, 70);
        //Dach
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(220, 280);
        Aufgabe5.crc2.lineTo(370, 280);
        Aufgabe5.crc2.lineTo(295, 240);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.strokeStyle = "#ABABAB";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#80400C";
        Aufgabe5.crc2.fill();
        //Tor
        Aufgabe5.crc2.fillStyle = "#303031";
        Aufgabe5.crc2.fillRect(250, 310, 40, 40);
        //Lift.rechts
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(500, 600);
        Aufgabe5.crc2.lineTo(345, 300);
        Aufgabe5.crc2.lineTo(345, 300);
        Aufgabe5.crc2.strokeStyle = "#585858";
        Aufgabe5.crc2.stroke();
        //Lift.links
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(500, 620);
        Aufgabe5.crc2.lineTo(345, 320);
        Aufgabe5.crc2.lineTo(345, 320);
        Aufgabe5.crc2.strokeStyle = "#585858";
        Aufgabe5.crc2.stroke();
        //feste B�ume
        drawTree(150, 400, "#165118");
        drawTree(200, 450, "#165118");
        drawTree(250, 500, "#165118");
        drawTree(110, 300, "#165118");
        drawTree(80, 460, "#165118");
        //B�ume
        function drawTree(_x, _y, _color) {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(_x, _y);
            Aufgabe5.crc2.lineTo(_x + 30, _y + 100);
            Aufgabe5.crc2.lineTo(_x - 30, _y + 100);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = _color;
            Aufgabe5.crc2.fill();
        }
        for (let i = 0; i < 6; i++) {
            let x = 400 + Math.random() * 700;
            let y = 300 + Math.random() * 200;
            drawTriangle(x, y, "#165118");
        }
        function drawTriangle(_x, _y, _color) {
            //B�ume random
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(_x, _y);
            Aufgabe5.crc2.lineTo(_x + 30, _y + 100);
            Aufgabe5.crc2.lineTo(_x - 30, _y + 100);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = _color;
            Aufgabe5.crc2.fill();
        }
        canImg = Aufgabe5.crc2.getImageData(0, 0, 800, 600); //speichert das Canvas Image
        //Startpunkte f�r Schnee
        for (let i = 0; i < 160; i++) {
            let s = new Aufgabe5.Snow(Math.random() * 800, Math.random() * 600, Math.random() * 800, Math.random() * 600, "#ABABAB");
            snow[i] = s;
        }
        //Startpunkte f�r Gondeln
        for (let i = 0; i < 1; i++) {
            let s = new Aufgabe5.Lift(0, 0, 470, 640, "#818080");
            lift[i] = s;
        }
        //Startpunkte f�r Wolken
        for (let i = 0; i < 2; i++) {
            let s = new Aufgabe5.Cloud(Math.random() * 20, 0, Math.random() * 5, Math.random() * 1 + 40, "#BDBDBD");
            cloud[i] = s;
        }
        //Class Aufruf Skifahrer
        for (let i = 0; i < 2; i++) {
            let s = new Aufgabe5.skiaaa(265, 350, Math.random() * 2, Math.random() * 5, "hsl(" + Math.random() * 360 + ", 90%, 60%)");
            skiFahrer[i] = s;
        }
        animiere(); //f�hrt Funktion aus
    }
    function animiere() {
        console.log("Timeout");
        Aufgabe5.crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        Aufgabe5.crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
        //for-Schleife Schnee
        for (let i = 0; i < snow.length; i++) {
            let s = snow[i];
            s.update();
        }
        //for-Schleife Wolken
        for (let i = 0; i < cloud.length; i++) {
            let s = cloud[i];
            s.update();
        }
        //for-Schleife Gondel
        for (let i = 0; i < lift.length; i++) {
            let s = lift[i];
            s.update();
        }
        //for Schleife Skifahrer
        for (let i = 0; i < skiFahrer.length; i++) {
            let s = skiFahrer[i];
            s.update();
        }
        window.setTimeout(animiere, 10);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
