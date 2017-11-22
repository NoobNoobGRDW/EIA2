/*
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Lift extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y, _dx, _dy, _color);
        }
        move() {
            this.x += -2, 99;
            this.y += -3;
            this.x += Math.random();
            if (this.y < 330) {
                this.x = 470;
                this.y = 640;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.fillStyle = "#818080";
            Aufgabe6.crc2.fillRect(this.x, this.y, 50, -40);
            Aufgabe6.crc2.strokeStyle = "#818080";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.fillStyle = "#1B1B1B";
            Aufgabe6.crc2.fillRect(this.x + 26, this.y - 17, 20, -20);
            Aufgabe6.crc2.strokeStyle = "#1B1B1B";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.fillStyle = "#1B1B1B";
            Aufgabe6.crc2.fillRect(this.x + 3, this.y - 17, 20, -20);
            Aufgabe6.crc2.strokeStyle = "#1B1B1B";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.fillStyle = "#818080";
            Aufgabe6.crc2.fillRect(this.x + 22, this.y - 40, 5, -5);
            Aufgabe6.crc2.strokeStyle = "#818080";
            Aufgabe6.crc2.stroke();
        }
    }
    Aufgabe6.Lift = Lift;
})(Aufgabe6 || (Aufgabe6 = {}));
