/* 
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {

    export class skiaaa {

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

            this.x = Math.random() + 265;   //Startpunkt
            this.y = Math.random() + 350;   //Startpunkt 
            this.dx += Math.random() *2;
            this.dy += Math.random() *5;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 800) { //Fahrer springen zurück
                this.x = 265;
                this.y = 350;
            }
        
        }

        draw(): void {

            crc2.fillStyle = "#885E2E";
            crc2.fillRect(this.x, this.y, 7, -30);//Beine


            crc2.beginPath();
            crc2.moveTo(this.x - 25, this.y - 13);//rechter Ski
            crc2.lineTo(this.x + 25, this.y + 13);
            crc2.strokeStyle = "#5C5A58";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y - 13);//linker Ski
            crc2.lineTo(this.x + 30, this.y + 13);
            crc2.strokeStyle = "#5C5A58";
            crc2.stroke();
            crc2.fillStyle = this.color;

            crc2.fillRect(this.x, this.y - 7, 7, -25);//Torso
            crc2.fillRect(this.x - 4, this.y - 9, 4, -16);//linker Arm
            crc2.fillRect(this.x + 6, this.y - 9, 4, -16);//rechter Arm 

            crc2.beginPath();
            crc2.arc(this.x + 2, this.y - 30, 6, 0, 2 * Math.PI);//Helm
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 3, this.y - 29, 5, 0, 2 * Math.PI);//Kopf
            crc2.fillStyle = "#C9B284";
            crc2.fill();
        }

        update(): void {

            this.move();
            this.draw();
        }

    }

}