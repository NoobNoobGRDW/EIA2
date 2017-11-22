/*
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Cloud extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y, _dx, _dy, _color);
        }
        move() {
            this.y = 80;
            this.x += Math.random() + 2;
            this.y += 0;
            if (this.x > 800) {
                this.x = 0;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#BDBDBD";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y - 20, 50, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#BDBDBD";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 20, this.y, 50, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#BDBDBD";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y + 30, 40, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#BDBDBD";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 70, this.y + 10, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#BDBDBD";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 70, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#BDBDBD";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Cloud = Cloud;
})(Aufgabe6 || (Aufgabe6 = {}));
