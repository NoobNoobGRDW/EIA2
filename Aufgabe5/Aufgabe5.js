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
    let snow;
    let cloud;
    let lift;
    let schneeX = [];
    let schneeY = [];
    let wolkeX = [];
    let wolkeY = [];
    let skiFahrerX = [];
    let skiFahrerY = [];
    let gondelX = [];
    let gondelY = [];
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
        function drawTree(_x, _y, _color) {
            //B�ume
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
        for (let i = 0; i < 6; i++) {
            let s = new Aufgabe5.skiaaa(300, 300);
            skiFahrer[i] = s;
            s.setRandomStyle();
        }
        animiere(); //f�hrt Funktion aus
    }
    /* //random Skifahrer
     for (let i: number = 0; i < 6; i++) {
         skiFahrer[i] = {
             x: 260,
             y: 350,
             dx: Math.random() * 2,
             dy: Math.random() * 5,
             color: "hsl(" + Math.random() * 360 + ", 90%, 50%)"
         }
     }*/
    function animiere() {
        console.log("Timeout");
        Aufgabe5.crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        Aufgabe5.crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
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
        /* //random SKifahrer
         for (let i: number = 0; i < skiFahrer.length; i++) {
             if (skiFahrer[i].y > 800) { //Fahrer springen zur�ck
                 skiFahrer[i].x = 260;
                 skiFahrer[i].y = 350;
             }
             
             genSki(skiFahrer[i]);
         }*/
        for (let i = 0; i < skiFahrer.length; i++) {
            let s = skiFahrer[i];
            s.update();
        }
        window.setTimeout(animiere, 20);
    }
    //Schnee generieren
    function genSchnee(_x, _y) {
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        Aufgabe5.crc2.strokeStyle = "#ABABAB";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#F1F7FA";
        Aufgabe5.crc2.fill();
    }
    //Wolken generieren
    function genWolke(_x, _y) {
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x + 40, _y, 50, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x, _y - 20, 50, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x - 20, _y, 50, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x, _y + 30, 40, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x + 70, _y + 10, 30, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(_x - 70, _y, 30, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
    }
    //Gondel generieren
    function genGondel(_x, _y) {
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.fillStyle = "#818080";
        Aufgabe5.crc2.fillRect(_x, _y, 50, -40);
        Aufgabe5.crc2.strokeStyle = "#818080";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.fillStyle = "#1B1B1B";
        Aufgabe5.crc2.fillRect(_x + 26, _y - 17, 20, -20);
        Aufgabe5.crc2.strokeStyle = "#1B1B1B";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.fillStyle = "#1B1B1B";
        Aufgabe5.crc2.fillRect(_x + 3, _y - 17, 20, -20);
        Aufgabe5.crc2.strokeStyle = "#1B1B1B";
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.fillStyle = "#818080";
        Aufgabe5.crc2.fillRect(_x + 22, _y - 40, 5, -5);
        Aufgabe5.crc2.strokeStyle = "#818080";
        Aufgabe5.crc2.stroke();
    }
})(Aufgabe5 || (Aufgabe5 = {}));
