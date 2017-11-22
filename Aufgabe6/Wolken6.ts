/* 
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {

    export class Cloud extends MovingObjects {

        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {
            super(_x, _y, _dx, _dy, _color);
        }

        move(): void {
            this.y = 80;
            this.x += Math.random() + 2;
            this.y += 0;

            if (this.x > 800) { //Wolken kommen wieder ins Bild
                this.x = 0;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 20, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 20, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y + 30, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 70, this.y + 10, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 70, this.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#BDBDBD";
            crc2.fill();
        }

    }
}