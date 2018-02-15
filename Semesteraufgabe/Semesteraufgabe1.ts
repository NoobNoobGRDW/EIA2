/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Semesteraufgabe1 {


    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", skiPiste);

    let objects: MovingObjects[] = [];


    var canImg: any; //initialisiert das Canvas Image

    function skiPiste() {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");

        //Hintergrund
        crc2.fillStyle = "#50504F";
        crc2.fillRect(0, 0, 1000, 600);

        //Tür
        crc2.fillStyle = "#2E2E2E";
        crc2.fillRect(20, 100, 200, 600);
        crc2.fillStyle = "#545453";
        crc2.fillRect(25, 105, 190, 600);
        //Knauf
        crc2.beginPath();
        crc2.arc(40, 300, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#2E2E2E";
        crc2.fill();

        //Vorhang
        crc2.fillStyle = "#B91A1A";
        crc2.fillRect(300, 0, 1000, 600);
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(300, 0, 20, 600);
        //Falte1
        crc2.fillStyle = "#D16B6B";
        crc2.fillRect(700, 0, 5, 600);
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(705, 0, 20, 600);
        //Falte2
        crc2.fillStyle = "#D16B6B";
        crc2.fillRect(850, 0, 5, 600);
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(855, 0, 20, 600);
        //Falte3
        crc2.fillStyle = "#D16B6B";
        crc2.fillRect(900, 0, 5, 600);
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(905, 0, 20, 600);

        //Bühne
        crc2.fillStyle = "#966534";
        crc2.fillRect(0, 400, 1000, 600);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 400, 1000, 5);
        //Verziehrung 
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(50, 400, 50, 500);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(200, 400, 50, 500);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(350, 400, 50, 500);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(500, 400, 50, 500);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(650, 400, 50, 500);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(800, 400, 50, 500);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(950, 400, 50, 500);

        //Boden
        crc2.fillStyle = "#B26C2F";
        crc2.fillRect(0, 550, 1000, 600);
        crc2.fillStyle = "#6A3F16";
        crc2.fillRect(0, 550, 1000, 5);

        //Tisch rechts
        //Bein
        crc2.fillStyle = "#2E2E2E";
        crc2.fillRect(770, 450, 10, 200);
        crc2.fillStyle = "#545453";
        crc2.fillRect(780, 450, 10, 200);
        //Fuss
        crc2.beginPath();
        crc2.moveTo(740, 600);//links
        crc2.lineTo(820, 600);//rechts
        crc2.lineTo(780, 570);//spitze
        crc2.closePath();
        crc2.strokeStyle = "#545453";
        crc2.stroke();
        crc2.fillStyle = "#545453";
        crc2.fill();
        //Platte
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(680, 450, 200, 30);

        //Tisch links
        //Bein
        crc2.fillStyle = "#2E2E2E";
        crc2.fillRect(270, 450, 10, 200);
        crc2.fillStyle = "#545453";
        crc2.fillRect(280, 450, 10, 200);
        //Fuss
        crc2.beginPath();
        crc2.moveTo(240, 600);//links
        crc2.lineTo(320, 600);//rechts
        crc2.lineTo(280, 570);//spitze
        crc2.closePath();
        crc2.strokeStyle = "#545453";
        crc2.stroke();
        crc2.fillStyle = "#545453";
        crc2.fill();
        //Platte
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(180, 450, 200, 30);

        //Stuhl links
        crc2.fillStyle = "#945415";
        crc2.fillRect(140, 410, 8, 200);
        //Platte
        crc2.fillStyle = "#945415";
        crc2.fillRect(140, 520, 100, 8);
        //Bein rechts
        crc2.fillStyle = "#945415";
        crc2.fillRect(240, 520, 8, 200);
        
        //Stuhl mitte
        crc2.fillStyle = "#945415";
        crc2.fillRect(310, 520, 8, 200);
        //Platte
        crc2.fillStyle = "#945415";
        crc2.fillRect(310, 520, 100, 8);
        //Bein rechts
        crc2.fillStyle = "#945415";
        crc2.fillRect(410, 410, 8, 200);        
        
        //Stuhl rechts
        crc2.fillStyle = "#945415";
        crc2.fillRect(805, 520, 8, 200);
        //Platte
        crc2.fillStyle = "#945415";
        crc2.fillRect(805, 520, 100, 8);
        //Bein rechts
        crc2.fillStyle = "#945415";
        crc2.fillRect(905, 410, 8, 200);
        
        //Flügel
        //linkes Bein
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(450, 300, 15, 100); 
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(450, 300, 2, 100);        
        //rechtes Bein
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(650, 300, 15, 100); 
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(650, 300, 2, 100); 
        //Rumpf
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(400, 270, 302, 52);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(402, 272, 300, 50);  
        //Deckel
        crc2.beginPath();
        crc2.moveTo(400, 300);
        crc2.lineTo(800, 300);
        crc2.lineTo(600, 250);
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();        
                
        canImg = crc2.getImageData(0, 0, 1000, 600); //speichert das Canvas Image



        animiere(); //führt Funktion aus
    }

    function animiere() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 600, 1000); // loescht Hintergrund
        crc2.putImageData(canImg, 0, 0); //fügt Bild ein



        //for-Schleife Objects
        for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }

        window.setTimeout(animiere, 10);
    }

}