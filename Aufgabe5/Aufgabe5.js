/*
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    let schneeX = [];
    let schneeY = [];
    let wolkeX = [];
    let wolkeY = [];
    let skiFahrerX = [];
    let skiFahrerY = [];
    let gondelX = [];
    let gondelY = [];
    var canImg; //initialisiert das Canvas Image
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        let skiFahrer = [];
        console.log(crc2);
        console.log("setTimeout");
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
        crc2.fillRect(0, 290, 800, 450);
        //Wolke
        crc2.beginPath();
        crc2.arc(650, 90, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(680, 90, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(620, 90, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(710, 90, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        //H�tte
        crc2.fillStyle = "#80400C";
        crc2.fillRect(230, 280, 130, 70);
        //Dach
        crc2.beginPath();
        crc2.moveTo(220, 280);
        crc2.lineTo(370, 280);
        crc2.lineTo(295, 240);
        crc2.closePath();
        crc2.strokeStyle = "#ABABAB";
        crc2.stroke();
        crc2.fillStyle = "#80400C";
        crc2.fill();
        //Tor
        crc2.fillStyle = "#303031";
        crc2.fillRect(250, 310, 40, 40);
        //Lift.rechts
        crc2.beginPath();
        crc2.moveTo(500, 600);
        crc2.lineTo(345, 300);
        crc2.lineTo(345, 300);
        crc2.strokeStyle = "#585858";
        crc2.stroke();
        //Lift.links
        crc2.beginPath();
        crc2.moveTo(500, 620);
        crc2.lineTo(345, 320);
        crc2.lineTo(345, 320);
        crc2.strokeStyle = "#585858";
        crc2.stroke();
        //feste B�ume
        drawTree(150, 400, "#165118");
        drawTree(200, 450, "#165118");
        drawTree(250, 500, "#165118");
        drawTree(110, 300, "#165118");
        drawTree(80, 460, "#165118");
        function drawTree(_x, _y, _color) {
            //B�ume
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 30, _y + 100);
            crc2.lineTo(_x - 30, _y + 100);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = _color;
            crc2.fill();
        }
        for (let i = 0; i < 6; i++) {
            let x = 400 + Math.random() * 700;
            let y = 300 + Math.random() * 200;
            drawTriangle(x, y, "#165118");
        }
        function drawTriangle(_x, _y, _color) {
            //B�ume random
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 30, _y + 100);
            crc2.lineTo(_x - 30, _y + 100);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = _color;
            crc2.fill();
        }
        canImg = crc2.getImageData(0, 0, 800, 600); //speichert das Canvas Image
        animiere(); //f�hrt Funktion aus
        //Startpunkte f�r Schnee
        for (let i = 0; i < 160; i++) {
            schneeX[i] = 0 + Math.random() * 800;
            schneeY[i] = 0 + Math.random() * 600;
        }
        //Startpunkte f�r Gondeln
        for (let i = 0; i < 1; i++) {
            gondelX[i] = 470;
            gondelY[i] = 640;
        }
        //Startpunkte f�r Wolken
        for (let i = 0; i < 2; i++) {
            wolkeX[i] = 0 + Math.random() * 800;
            wolkeY[i] = 0 + Math.random() * 150 + 40;
        }
        //random Skifahrer
        for (let i = 0; i < 10; i++) {
            skiFahrer[i] = {
                x: 260,
                y: 350,
                dx: Math.random() * 2,
                dy: Math.random() * 5,
                color: "hsl(" + Math.random() * 360 + ", 90%, 50%)"
            };
        }
        function animiere() {
            console.log("Timeout");
            crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
            crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
            //for-Schleife Schnee
            for (let i = 0; i < schneeX.length; i++) {
                if (schneeY[i] > 600) {
                    schneeY[i] = 0;
                }
                schneeY[i] += Math.random();
                genSchnee(schneeX[i], schneeY[i]);
            }
            //for-Schleife Wolken
            for (let i = 0; i < wolkeX.length; i++) {
                if (wolkeX[i] > 800) {
                    wolkeX[i] = 0;
                }
                wolkeX[i] += Math.random();
                genWolke(wolkeX[i], wolkeY[i]);
            }
            //for-Schleife Gondel
            for (let i = 0; i < gondelX.length; i++) {
                if (gondelY[i] < 330) {
                    gondelX[i] = 470;
                    gondelY[i] = 640;
                }
                gondelX[i] += -2, 99;
                gondelY[i] += -3;
                gondelX[i] += Math.random();
                genGondel(gondelX[i], gondelY[i]);
            }
            //random SKifahrer
            for (let i = 0; i < skiFahrer.length; i++) {
                if (skiFahrer[i].y > 800) {
                    skiFahrer[i].x = 260;
                    skiFahrer[i].y = 350;
                }
                genSki(skiFahrer[i]);
            }
            window.setTimeout(animiere, 20);
        }
        //Schnee generieren
        function genSchnee(_x, _y) {
            crc2.beginPath();
            crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
            crc2.strokeStyle = "#ABABAB";
            crc2.stroke();
            crc2.fillStyle = "#F1F7FA";
            crc2.fill();
        }
        //Wolken generieren
        function genWolke(_x, _y) {
            crc2.beginPath();
            crc2.arc(_x + 40, _y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 20, _y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y + 30, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 70, _y + 10, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 70, _y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
        }
        //Gondel generieren
        function genGondel(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "#818080";
            crc2.fillRect(_x, _y, 50, -40);
            crc2.strokeStyle = "#818080";
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "#1B1B1B";
            crc2.fillRect(_x + 26, _y - 17, 20, -20);
            crc2.strokeStyle = "#1B1B1B";
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "#1B1B1B";
            crc2.fillRect(_x + 3, _y - 17, 20, -20);
            crc2.strokeStyle = "#1B1B1B";
            crc2.stroke();
            crc2.beginPath();
            crc2.fillStyle = "#818080";
            crc2.fillRect(_x + 22, _y - 40, 5, -5);
            crc2.strokeStyle = "#818080";
            crc2.stroke();
        }
        //Skifahrer generieren
        function genSki(_skiFahrer) {
            _skiFahrer.x += _skiFahrer.dx;
            _skiFahrer.y += _skiFahrer.dy; // Richtung �ndern
            crc2.fillStyle = "#885E2E";
            crc2.fillRect(_skiFahrer.x, _skiFahrer.y, 7, -30); //Beine
            crc2.fillStyle = _skiFahrer.color;
            crc2.fillRect(_skiFahrer.x, _skiFahrer.y - 7, 7, -25); //Torso
            crc2.fillRect(_skiFahrer.x - 4, _skiFahrer.y - 9, 4, -16); //linker Arm
            crc2.fillRect(_skiFahrer.x + 6, _skiFahrer.y - 9, 4, -16); //rechter Arm 
            crc2.beginPath();
            crc2.arc(_skiFahrer.x + 2, _skiFahrer.y - 30, 6, 0, 2 * Math.PI); //Helm
            crc2.fillStyle = _skiFahrer.color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_skiFahrer.x + 3, _skiFahrer.y - 29, 5, 0, 2 * Math.PI); //Kopf
            crc2.fillStyle = "#C9B284";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(_skiFahrer.x - 25, _skiFahrer.y - 13); //rechter Ski
            crc2.lineTo(_skiFahrer.x + 25, _skiFahrer.y + 13);
            crc2.strokeStyle = "#5C5A58";
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_skiFahrer.x - 20, _skiFahrer.y - 13); //linker Ski
            crc2.lineTo(_skiFahrer.x + 30, _skiFahrer.y + 13);
            crc2.strokeStyle = "#5C5A58";
            crc2.stroke();
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
