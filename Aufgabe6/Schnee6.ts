/* 
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {

    export class Snow extends MovingObjects {

        x: number;
        y: number;
        color: string

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }

        move(): void {
            this.y += 3;
            if (this.y > 600) { //Schneefall wiederholt sich
                this.y = 0;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.strokeStyle = "#ABABAB";
            crc2.stroke();
            crc2.fillStyle = "#F1F7FA";
            crc2.fill();
        }

    }
}