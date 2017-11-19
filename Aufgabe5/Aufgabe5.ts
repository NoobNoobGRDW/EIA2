/* 
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe5 {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", skiPiste);

    let skiFahrer: skiaaa[] = [];
    let snow: Snow;
    let cloud: Cloud;
    let lift: Lift;

    let schneeX: number[] = [];
    let schneeY: number[] = [];
    let wolkeX: number[] = [];
    let wolkeY: number[] = [];
    let skiFahrerX: number[] = [];
    let skiFahrerY: number[] = [];
    let gondelX: number[] = [];
    let gondelY: number[] = [];


    var canImg: any; //initialisiert das Canvas Image

    function skiPiste() {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
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

        //Hütte
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

        //feste Bäume
        drawTree(150, 400, "#165118");
        drawTree(200, 450, "#165118");
        drawTree(250, 500, "#165118");
        drawTree(110, 300, "#165118");
        drawTree(80, 460, "#165118");


        function drawTree(_x: number, _y: number, _color: string) {
            //Bäume
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

        function drawTriangle(_x: number, _y: number, _color: string) {
            //Bäume random
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


        //Startpunkte für Schnee
        for (let i = 0; i < 160; i++) {
            schneeX[i] = 0 + Math.random() * 800;
            schneeY[i] = 0 + Math.random() * 600;
        }

        //Startpunkte für Gondeln
        for (let i = 0; i < 1; i++) {
            gondelX[i] = 470;
            gondelY[i] = 640;
        }

        //Startpunkte für Wolken
        for (let i = 0; i < 2; i++) {
            wolkeX[i] = 0 + Math.random() * 800;
            wolkeY[i] = 0 + Math.random() * 150 + 40;
        }

        for (let i: number = 0; i < 2; i++) {
            let s: skiaaa = new skiaaa(265,
                350,
                Math.random() * 2,
                Math.random() * 5,
                "hsl(" + Math.random() * 360 + ", 90%, 60%)");
           
            skiFahrer[i] = s;
        }

        animiere(); //führt Funktion aus
    }

    function animiere() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
        crc2.putImageData(canImg, 0, 0); //fügt Bild ein
        //for-Schleife Schnee
        for (let i = 0; i < schneeX.length; i++) {
            if (schneeY[i] > 600) { //Schneefall wiederholt sich
                schneeY[i] = 0;
            }

            schneeY[i] += Math.random();
            genSchnee(schneeX[i], schneeY[i]);
        }
        //for-Schleife Wolken
        for (let i = 0; i < wolkeX.length; i++) {
            if (wolkeX[i] > 800) { //Wolken kommen wieder ins Bild
                wolkeX[i] = 0;
            }
            wolkeX[i] += Math.random();
            genWolke(wolkeX[i], wolkeY[i]);
        }

        //for-Schleife Gondel
        for (let i = 0; i < gondelX.length; i++) {
            if (gondelY[i] < 330) { //Gondeln kommen wieder ins Bild
                gondelX[i] = 470;
                gondelY[i] = 640;
            }
            gondelX[i] += -2, 99;
            gondelY[i] += -3;
            gondelX[i] += Math.random();
            genGondel(gondelX[i], gondelY[i]);
        }

        for (let i: number = 0; i < skiFahrer.length; i++) {
            
            let s: skiaaa = skiFahrer[i];
            s.update();
        }

        window.setTimeout(animiere, 10);
    }
    //Schnee generieren
    function genSchnee(_x: number, _y: number) {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.strokeStyle = "#ABABAB";
        crc2.stroke();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();
    }
    //Wolken generieren
    function genWolke(_x: number, _y: number) {
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
    function genGondel(_x: number, _y: number) {
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

}