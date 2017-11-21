/*
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Cloud {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 40, this.y, 50, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#BDBDBD";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y - 20, 50, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#BDBDBD";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 20, this.y, 50, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#BDBDBD";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y + 30, 40, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#BDBDBD";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 70, this.y + 10, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#BDBDBD";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 70, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#BDBDBD";
            Aufgabe5.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.Cloud = Cloud;
})(Aufgabe5 || (Aufgabe5 = {}));
