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
            this.x += Math.random() * 1 + 1;
            this.y += -2;


            if (this.x > 720) { //Gondeln kommen wieder ins Bild
                this.x = 500;
                this.y = 270;
            }
        }

        draw(): void {
            //Kreis links
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            //Kreis rechts
            crc2.beginPath();
            crc2.arc(this.x + 70, this.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            //Balken links
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x + 43, this.y - 40, 5, 43);
            //Balken rechts
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x + 73, this.y - 40, 5, 43);
            //Balken oben
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x + 43, this.y - 40, 32, 5);
            
        }

    }
}