/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Semesteraufgabe1 {


    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", bar);

    let objects: MovingObjects[] = [];


    var canImg: any; //initialisiert das Canvas Image

    function bar() {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");


        //Hintergrund
        crc2.fillStyle = "#50504F";
        crc2.fillRect(0, 0, 1000, 600);

        //T�r
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
        crc2.fillRect(280, 0, 1000, 600);
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(280, 0, 20, 600);
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

        //Lampengestell
        //oben
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 25, 1000, 8);
        //unten
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 70, 1000, 8);
        //vertikal
        crc2.fillStyle = "#000000";
        crc2.fillRect(200, 25, 8, 50);

        crc2.fillStyle = "#000000";
        crc2.fillRect(400, 25, 8, 50);

        crc2.fillStyle = "#000000";
        crc2.fillRect(600, 25, 8, 50);

        crc2.fillStyle = "#000000";
        crc2.fillRect(800, 25, 8, 50);
        
        //B�hne
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
        crc2.lineTo(280, 570);//oben
        crc2.closePath();
        crc2.strokeStyle = "#545453";
        crc2.stroke();
        crc2.fillStyle = "#545453";
        crc2.fill();
        //Platte
        crc2.fillStyle = "#7B2222";
        crc2.fillRect(180, 450, 200, 30);

        //Stuhl links
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(140, 410, 8, 200);
        //Platte
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(140, 520, 100, 8);
        //Bein rechts
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(240, 520, 8, 200);

        //Stuhl mitte
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(310, 520, 8, 200);
        //Platte
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(310, 520, 100, 8);
        //Bein rechts
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(410, 410, 8, 200);

        //Stuhl rechts
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(805, 520, 8, 200);
        //Platte
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(805, 520, 100, 8);
        //Bein rechts
        crc2.fillStyle = "#4C1F05";
        crc2.fillRect(905, 410, 8, 200);

        //Fl�gel
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
        //Tasten
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(380, 280, 302, 42);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(382, 282, 300, 40);
        //Rumpf
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(400, 270, 302, 52);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(402, 272, 300, 50);
        //Deckel
        crc2.beginPath();
        crc2.moveTo(430, 270); //links
        crc2.lineTo(700, 270); //rechts
        crc2.lineTo(600, 180); //oben
        crc2.closePath();
        crc2.strokeStyle = "#ADACAB";
        crc2.stroke();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Stuhl
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(320, 350, 15, 50);
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(320, 350, 2, 50);
        crc2.fillStyle = "#0F0F0F";   //Platte
        crc2.fillRect(300, 340, 60, 15);
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(300, 340, 2, 15);

        //Piano Man
        //Rumpf
        crc2.fillStyle = "#ADACAB";
        crc2.fillRect(310, 240, 50, 90);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(311, 241, 50, 90);
        //Kopf  
        crc2.beginPath(); //Haare
        crc2.arc(330, 208, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#171512";
        crc2.fill();
        crc2.beginPath();   //Kopf
        crc2.arc(338, 212, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#683B13";
        crc2.fill();
        crc2.fillStyle = "#0F0F0F";    //Mund
        crc2.fillRect(350, 225, 10, 2);
        //Mundwinkel
        crc2.beginPath();
        crc2.moveTo(345, 225);//links 
        crc2.lineTo(350, 227);//rechts
        crc2.lineTo(350, 225);//oben rechts
        crc2.lineTo(345, 223);//oben links   
        crc2.closePath();
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();

        crc2.beginPath();   //Augen links
        crc2.arc(344, 211, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        crc2.beginPath();   //Augen rechts
        crc2.arc(358, 211, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#0F0F0F";
        crc2.fill();
        //Arm
        crc2.fillStyle = "#ADACAB";    //Oberarm
        crc2.fillRect(330, 242, 20, 48);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(331, 242, 20, 48);
        crc2.fillStyle = "#ADACAB";    //Unterarm
        crc2.fillRect(340, 280, 40, 15);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(331, 281, 50, 15);
        //Bein
        crc2.fillStyle = "#ADACAB";    //Oberschenkel
        crc2.fillRect(311, 320, 60, 22);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(312, 321, 60, 20);
        crc2.fillStyle = "#ADACAB";    //Unterschenkel
        crc2.fillRect(361, 330, 20, 70);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(362, 321, 20, 80);
        crc2.fillStyle = "#ADACAB";    //Fu�
        crc2.fillRect(361, 385, 40, 15);
        crc2.fillStyle = "#0F0F0F";
        crc2.fillRect(362, 386, 40, 15);

        canImg = crc2.getImageData(0, 0, 1000, 600); //speichert das Canvas Image



        //Startpunkte f�r Noten
        for (let i = 0; i < 3; i++) {
            let n: Note = new Note(Math.random() * (800 - 400) + 400,
                260,
                "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(n);
        }

        //Startpunkte f�r Lampen
        for (let i = 0; i < 1; i++) {
            let l: Lampe = new Lampe(50,
                50,
                "#FACC2E");
            objects.push(l);
        }
        animiere(); //f�hrt Funktion aus

    }


    function animiere() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 1000, 600); // loescht Hintergrund
        crc2.putImageData(canImg, 0, 0); //f�gt Bild ein



        //for-Schleife Objects
        for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }

        window.setTimeout(animiere, 10);
    }


}