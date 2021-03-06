/* 
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe6 {

    export class Lift extends MovingObjects {

        x: number;
        y: number;
        color: string
        
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
        }
        
        move(): void {
            this.x += -2;
            this.y += -3;
            this.x += Math.random();
            
            if (this.y < 330) { //Gondeln kommen wieder ins Bild
                this.x = 470;
                this.y = 640;
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

            crc2.beginPath();//Aufh�ngung
            crc2.fillStyle = "#818080";
            crc2.fillRect(this.x + 22, this.y - 40, 5, -5);
            crc2.strokeStyle = "#818080";
            crc2.stroke();
            }
        
    }
}