/* 
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {


    export class Lift {

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
            this.x += -2, 99;
            this.y += -3;
            this.x += Math.random();
            
            if (this.y < 330) { //Gondeln kommen wieder ins Bild
                this.x = 470;
                this.y = 640;
            }
        }
        
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#818080";
            crc2.fillRect(this.x, this.y, 50, -40);
            crc2.strokeStyle = "#818080";
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#1B1B1B";
            crc2.fillRect(this.x + 26, this.y - 17, 20, -20);
            crc2.strokeStyle = "#1B1B1B";
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#1B1B1B";
            crc2.fillRect(this.x + 3, this.y - 17, 20, -20);
            crc2.strokeStyle = "#1B1B1B";
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#818080";
            crc2.fillRect(this.x + 22, this.y - 40, 5, -5);
            crc2.strokeStyle = "#818080";
            crc2.stroke();
        }
        
        update(): void {
            this.move();
            this.draw();
        }

    }
}