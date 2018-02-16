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
            this.x += 2;
            this.y += -2;
            this.x += Math.random();
            
            if (this.x < 0) { //Gondeln kommen wieder ins Bild
                this.x = 500;
                this.y = 500;
            }
            }
        
        draw(): void {
            crc2.beginPath();//Gondel
            crc2.fillStyle = "#818080";
            crc2.fillRect(this.x, this.y, 50, -40);
            crc2.strokeStyle = "#818080";
            crc2.stroke();

            crc2.beginPath();//Fenster rechts
            crc2.fillStyle = "#1B1B1B";
            crc2.fillRect(this.x + 26, this.y - 17, 20, -20);
            crc2.strokeStyle = "#1B1B1B";
            crc2.stroke();

            crc2.beginPath();//Fenster links
            crc2.fillStyle = "#1B1B1B";
            crc2.fillRect(this.x + 3, this.y - 17, 20, -20);
            crc2.strokeStyle = "#1B1B1B";
            crc2.stroke();

            crc2.beginPath();//Aufhängung
            crc2.fillStyle = "#818080";
            crc2.fillRect(this.x + 22, this.y - 40, 5, -5);
            crc2.strokeStyle = "#818080";
            crc2.stroke();
            }
        
    }
}