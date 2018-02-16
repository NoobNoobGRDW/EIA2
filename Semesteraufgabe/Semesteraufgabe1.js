/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Semesteraufgabe1;
(function (Semesteraufgabe1) {
    window.addEventListener("load", bar);
    let objects = [];
    var canImg; //initialisiert das Canvas Image
    function bar() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Semesteraufgabe1.crc2 = canvas.getContext("2d");
        console.log(canvas);
        console.log("setTimeout");
        //Hintergrund
        Semesteraufgabe1.crc2.fillStyle = "#50504F";
        Semesteraufgabe1.crc2.fillRect(0, 0, 1000, 600);
        //T�r
        Semesteraufgabe1.crc2.fillStyle = "#2E2E2E";
        Semesteraufgabe1.crc2.fillRect(20, 100, 200, 600);
        Semesteraufgabe1.crc2.fillStyle = "#545453";
        Semesteraufgabe1.crc2.fillRect(25, 105, 190, 600);
        //Knauf
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.arc(40, 300, 10, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#2E2E2E";
        Semesteraufgabe1.crc2.fill();
        //Vorhang
        Semesteraufgabe1.crc2.fillStyle = "#B91A1A";
        Semesteraufgabe1.crc2.fillRect(280, 0, 1000, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(280, 0, 20, 600);
        //Falte1
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(700, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(705, 0, 20, 600);
        //Falte2
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(850, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(855, 0, 20, 600);
        //Falte3
        Semesteraufgabe1.crc2.fillStyle = "#D16B6B";
        Semesteraufgabe1.crc2.fillRect(900, 0, 5, 600);
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(905, 0, 20, 600);
        //B�hne
        Semesteraufgabe1.crc2.fillStyle = "#966534";
        Semesteraufgabe1.crc2.fillRect(0, 400, 1000, 600);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(0, 400, 1000, 5);
        //Verziehrung 
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(50, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(200, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(350, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(500, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(650, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(800, 400, 50, 500);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(950, 400, 50, 500);
        //Boden
        Semesteraufgabe1.crc2.fillStyle = "#B26C2F";
        Semesteraufgabe1.crc2.fillRect(0, 550, 1000, 600);
        Semesteraufgabe1.crc2.fillStyle = "#6A3F16";
        Semesteraufgabe1.crc2.fillRect(0, 550, 1000, 5);
        //Tisch rechts
        //Bein
        Semesteraufgabe1.crc2.fillStyle = "#2E2E2E";
        Semesteraufgabe1.crc2.fillRect(770, 450, 10, 200);
        Semesteraufgabe1.crc2.fillStyle = "#545453";
        Semesteraufgabe1.crc2.fillRect(780, 450, 10, 200);
        //Fuss
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(740, 600); //links
        Semesteraufgabe1.crc2.lineTo(820, 600); //rechts
        Semesteraufgabe1.crc2.lineTo(780, 570); //spitze
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#545453";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#545453";
        Semesteraufgabe1.crc2.fill();
        //Platte
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(680, 450, 200, 30);
        //Tisch links
        //Bein
        Semesteraufgabe1.crc2.fillStyle = "#2E2E2E";
        Semesteraufgabe1.crc2.fillRect(270, 450, 10, 200);
        Semesteraufgabe1.crc2.fillStyle = "#545453";
        Semesteraufgabe1.crc2.fillRect(280, 450, 10, 200);
        //Fuss
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(240, 600); //links
        Semesteraufgabe1.crc2.lineTo(320, 600); //rechts
        Semesteraufgabe1.crc2.lineTo(280, 570); //oben
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#545453";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#545453";
        Semesteraufgabe1.crc2.fill();
        //Platte
        Semesteraufgabe1.crc2.fillStyle = "#7B2222";
        Semesteraufgabe1.crc2.fillRect(180, 450, 200, 30);
        //Stuhl links
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(140, 410, 8, 200);
        //Platte
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(140, 520, 100, 8);
        //Bein rechts
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(240, 520, 8, 200);
        //Stuhl mitte
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(310, 520, 8, 200);
        //Platte
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(310, 520, 100, 8);
        //Bein rechts
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(410, 410, 8, 200);
        //Stuhl rechts
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(805, 520, 8, 200);
        //Platte
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(805, 520, 100, 8);
        //Bein rechts
        Semesteraufgabe1.crc2.fillStyle = "#4C1F05";
        Semesteraufgabe1.crc2.fillRect(905, 410, 8, 200);
        //Fl�gel
        //linkes Bein
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(450, 300, 15, 100);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(450, 300, 2, 100);
        //rechtes Bein
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(650, 300, 15, 100);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(650, 300, 2, 100);
        //Tasten
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(380, 280, 302, 42);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(382, 282, 300, 40);
        //Rumpf
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(400, 270, 302, 52);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(402, 272, 300, 50);
        //Deckel
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(430, 270); //links
        Semesteraufgabe1.crc2.lineTo(700, 270); //rechts
        Semesteraufgabe1.crc2.lineTo(600, 180); //oben
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.strokeStyle = "#ADACAB";
        Semesteraufgabe1.crc2.stroke();
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fill();
        //Stuhl
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(320, 350, 15, 50);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(320, 350, 2, 50);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F"; //Platte
        Semesteraufgabe1.crc2.fillRect(300, 340, 60, 15);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(300, 340, 2, 15);
        //Piano Man
        //Rumpf
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB";
        Semesteraufgabe1.crc2.fillRect(310, 240, 50, 90);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(311, 241, 50, 90);
        //Kopf  
        Semesteraufgabe1.crc2.beginPath(); //Haare
        Semesteraufgabe1.crc2.arc(330, 208, 30, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#171512";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.beginPath(); //Kopf
        Semesteraufgabe1.crc2.arc(338, 212, 30, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#683B13";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F"; //Mund
        Semesteraufgabe1.crc2.fillRect(350, 225, 10, 2);
        //Mundwinkel
        Semesteraufgabe1.crc2.beginPath();
        Semesteraufgabe1.crc2.moveTo(345, 225); //links 
        Semesteraufgabe1.crc2.lineTo(350, 227); //rechts
        Semesteraufgabe1.crc2.lineTo(350, 225); //oben rechts
        Semesteraufgabe1.crc2.lineTo(345, 223); //oben links   
        Semesteraufgabe1.crc2.closePath();
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.beginPath(); //Augen links
        Semesteraufgabe1.crc2.arc(344, 211, 4, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fill();
        Semesteraufgabe1.crc2.beginPath(); //Augen rechts
        Semesteraufgabe1.crc2.arc(358, 211, 4, 0, 2 * Math.PI);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fill();
        //Arm
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB"; //Oberarm
        Semesteraufgabe1.crc2.fillRect(330, 242, 20, 48);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(331, 242, 20, 48);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB"; //Unterarm
        Semesteraufgabe1.crc2.fillRect(340, 280, 40, 15);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(331, 281, 50, 15);
        //Bein
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB"; //Oberschenkel
        Semesteraufgabe1.crc2.fillRect(311, 320, 60, 22);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(312, 321, 60, 20);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB"; //Unterschenkel
        Semesteraufgabe1.crc2.fillRect(361, 330, 20, 70);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(362, 321, 20, 80);
        Semesteraufgabe1.crc2.fillStyle = "#ADACAB"; //Fu�
        Semesteraufgabe1.crc2.fillRect(361, 385, 40, 15);
        Semesteraufgabe1.crc2.fillStyle = "#0F0F0F";
        Semesteraufgabe1.crc2.fillRect(362, 386, 40, 15);
        canImg = Semesteraufgabe1.crc2.getImageData(0, 0, 1000, 600); //speichert das Canvas Image
        //Startpunkte f�r Noten
        for (let i = 0; i < 3; i++) {
            let n = new Semesteraufgabe1.Note(Math.random() * (800 - 400) + 400, 260, "hsl(" + Math.random() * 360 + ", 90%, 70%)");
            objects.push(n);
        }
        animiere(); //f�hrt Funktion aus
    }
    function animiere() {
        console.log("Timeout");
        Semesteraufgabe1.crc2.clearRect(0, 0, 1000, 600); // loescht Hintergrund
        Semesteraufgabe1.crc2.putImageData(canImg, 0, 0); //f�gt Bild ein
        //for-Schleife Objects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animiere, 10);
    }
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
