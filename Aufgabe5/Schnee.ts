/* 
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {

    export class Snow {

        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {

            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }

        move(): void {
            this.x += Math.random() * 0 ;
            this.y += Math.random() * 4 ;
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

        update(): void {
            this.move();
            this.draw();
        }
    }

}