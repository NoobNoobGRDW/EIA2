/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Semesteraufgabe1;
(function (Semesteraufgabe1) {
    class Note extends Semesteraufgabe1.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x += 1;
            this.y += -2;
            this.x += Math.random();
            if (this.x > 800) {
                this.x = 500;
                this.y = 300;
            }
        }
        draw() {
            //Kreis links
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.arc(40, 300, 5, 0, 2 * Math.PI);
            Semesteraufgabe1.crc2.fillStyle = "#000000";
            Semesteraufgabe1.crc2.fill();
        }
    }
    Semesteraufgabe1.Note = Note;
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
