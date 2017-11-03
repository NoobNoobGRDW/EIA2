/* 
Aufgabe: 3
Name: Kuenz,Linus
Matrikel: 256331
Datum: 27.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe3 {

    window.addEventListener("load", init);


    let arrayX: number[] = [];
    let arrayY: number[] = [];

    var canImg: any; //initialisiert das Canvas Image

    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");

        for (let i = 0; i < 400; i++) {
            arrayX[i] = 400;
            arrayY[i] = 2;
        }
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
        //Wolke1
        crc2.beginPath();
        crc2.arc(150, 100, 70, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(180, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(80, 105, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(230, 100, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#BDBDBD";
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

        //feste Bäume
        drawTree(150, 400, "#165118");
        drawTree(250, 400, "#165118");
        drawTree(350, 400, "#165118");

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

        for (let i = 0; i < 12; i++) {
            let x = 50 + Math.random() * 700;
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

        /*       for (let i = 0; i < 120; i++) {
                   let x = 10 + Math.random() * 800;
                   let y = 20 + Math.random() * 600;
                   drawSnow(x, y, "#F1F7FA");
               }
       
               function drawSnow(_x: number, _y: number, _color: string) {
                   //Schnee
                   crc2.beginPath();
                   crc2.arc(_x, _y, 4, 0, 2 * Math.PI);
                   crc2.strokeStyle = "#BDBDBD";
                   crc2.stroke();
                   crc2.fillStyle = "#F1F7FA";
                   crc2.fill();
               } */
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


        canImg = crc2.getImageData(0, 0, 800, 600); //speichert das Canvas Image
        animiere(); //führt Funktion aus
        animiere1();

        function animiere() {
            console.log("Timeout");
            crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
            crc2.putImageData(canImg, 0, 0); //fügt Bild ein

            for (let i = 0; i < arrayX.length; i++) {
                arrayX[i] += Math.random() * 40 - 20; 
                arrayY[i] += Math.random() * 7 - 3; 

                crc2.beginPath(); //zeichnet Schnee
                crc2.arc(arrayX[i], arrayY[i], 4, 0, 2 * Math.PI);
                crc2.fillStyle = "#F1F7FA";
                crc2.fill();
                crc2.strokeStyle = "#BDBDBD";
                crc2.stroke();
            }
            window.setTimeout(animiere, 30);
        }
        
        function animiere1() {
            console.log("Timeout");
            crc2.clearRect(0, 0, 600, 800); // loescht Hintergrund
            crc2.putImageData(canImg, 0, 0); //fügt Bild ein

            for (let i = 0; i < arrayX.length; i++) {
                arrayX[i] += Math.random() * 40 - 20; 
                arrayY[i] += Math.random() * 7 - 3; 

                crc2.beginPath(); //zeichnet Schnee
                crc2.arc(arrayX[i], arrayY[i], 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffff02";
                crc2.fill();
                crc2.strokeStyle = "#BDBDBD";
                crc2.stroke();
            }
            window.setTimeout(animiere, 30);
        }
    }

}