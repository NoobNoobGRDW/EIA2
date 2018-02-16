/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Semesteraufgabe1 {

    export class Note extends MovingObjects {

        x: number;
        y: number;
        color: string

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        move(): void {
            this.x += 1;
            this.y += -2;
            this.x += Math.random();

            if (this.x > 700) { //Gondeln kommen wieder ins Bild
                this.x = 500;
                this.y = 300;
            }
        }

        draw(): void {
            //Kreis links
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();


        }

    }
}