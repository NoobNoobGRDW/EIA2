/* 
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", skiPiste);

    let skiFahrer: skiaaa[] = [];
    let snow: Snow[] = [];
    let cloud: Cloud[] = [];
    let lift: Lift[] = [];

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

        //Bäume
        function drawTree(_x: number, _y: number, _color: string) {
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
            let s: Snow = new Snow(Math.random() * 800,
                Math.random() * 600,
                Math.random() * 800,
                Math.random() * 600,
                "#ABABAB");
            snow[i] = s;
        }

        //Startpunkte für Gondeln
        for (let i = 0; i < 1; i++) {
            let s: Lift = new Lift(0,
                0,
                470,
                640,
                "#818080")
            lift[i] = s;
        }

        //Startpunkte für Wolken
        for (let i = 0; i < 2; i++) {
            let s: Cloud = new Cloud(0,
                0,
                Math.random() * 5,
                Math.random() * 1 + 40,
                "#BDBDBD")
            cloud[i] = s;
        }

        //Class aufruf Skifahrer
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
        for (let i = 0; i < snow.length; i++) {

            let s: Snow = snow[i];
            s.update();
        }
        //for-Schleife Wolken
        for (let i = 0; i < cloud.length; i++) {

            let s: Cloud = cloud[i];
            s.update();
        }

        //for-Schleife Gondel
        for (let i = 0; i < lift.length; i++) {

            let s: Lift = lift[i];
            s.update();
        }
        //for Schleife Skifahrer
        for (let i: number = 0; i < skiFahrer.length; i++) {

            let s: skiaaa = skiFahrer[i];
            s.update();
        }

        window.setTimeout(animiere, 10);
    }

}