/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Semesteraufgabe1;
(function (Semesteraufgabe1) {
    class Lampe extends Semesteraufgabe1.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x += 1;
            this.y += 0;
            if (this.x > 51) {
                this.x = 50;
                this.y = 50;
            }
        }
        draw() {
            //Kreis links
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.arc(this.x, this.y, 35, 0, 2 * Math.PI);
            Semesteraufgabe1.crc2.strokeStyle = "#000000";
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fill();
            //Kreis rechts
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.arc(this.x + 900, this.y, 35, 0, 2 * Math.PI);
            Semesteraufgabe1.crc2.strokeStyle = "#000000";
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fill();
        }
    }
    Semesteraufgabe1.Lampe = Lampe;
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
