/*
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Lift {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.fillStyle = "#818080";
            Aufgabe5.crc2.fillRect(this.x, this.y, 50, -40);
            Aufgabe5.crc2.strokeStyle = "#818080";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.fillStyle = "#1B1B1B";
            Aufgabe5.crc2.fillRect(this.x + 26, this.y - 17, 20, -20);
            Aufgabe5.crc2.strokeStyle = "#1B1B1B";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.fillStyle = "#1B1B1B";
            Aufgabe5.crc2.fillRect(this.x + 3, this.y - 17, 20, -20);
            Aufgabe5.crc2.strokeStyle = "#1B1B1B";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.fillStyle = "#818080";
            Aufgabe5.crc2.fillRect(this.x + 22, this.y - 40, 5, -5);
            Aufgabe5.crc2.strokeStyle = "#818080";
            Aufgabe5.crc2.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.Lift = Lift;
})(Aufgabe5 || (Aufgabe5 = {}));
