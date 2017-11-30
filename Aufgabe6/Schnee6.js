/*
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Snow extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y += Math.random() * 4;
            if (this.y > 600) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#ABABAB";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#F1F7FA";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Snow = Snow;
})(Aufgabe6 || (Aufgabe6 = {}));
