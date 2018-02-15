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

        //Vorhang
        crc2.fillStyle = "#B91A1A";
        crc2.fillRect(0,0, 1000, 600);
        
        crc2.fillStyle = "#D16B6B";
        crc2.fillRect(500,0, 5, 600);
        
        crc2.fillStyle = "#D16B6B";
        crc2.fillRect(700,0, 5, 600);        

        //Boden
        crc2.fillStyle = "#B26C2F";
        crc2.fillRect(0, 500, 1000, 600);        


        canImg = crc2.getImageData(0, 0, 1000, 600); //speichert das Canvas Image



        animiere(); //f�hrt Funktion aus
    }

    function animiere() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 600, 1000); // loescht Hintergrund
        crc2.putImageData(canImg, 0, 0); //f�gt Bild ein



        //for-Schleife Objects
        for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }

        window.setTimeout(animiere, 10);
    }

}