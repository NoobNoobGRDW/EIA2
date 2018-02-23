/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Semesteraufgabe1 {

    export class Lampe extends MovingObjects {

        x: number;
        y: number;
        color: string

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        move(): void {
            this.x += 1;
            this.y += 1;


            if (this.x > 720) { 
                this.x = 500;
                this.y = 260;
            }
        }

        draw(): void {
            //Kreis links
            crc2.beginPath();
            crc2.arc(this.x , this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            //Kreis rechts
            crc2.beginPath();
            crc2.arc(this.x + 700, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            
        }

    }
}