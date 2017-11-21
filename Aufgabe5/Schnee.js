/*
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Snow {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        move() {
            this.x += Math.random() * 0;
            this.y += Math.random() * 4;
            if (this.y > 600) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#ABABAB";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = "#F1F7FA";
            Aufgabe5.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.Snow = Snow;
})(Aufgabe5 || (Aufgabe5 = {}));
