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
            this.x += Math.random() + 1;
            this.y += -2;
            if (this.x > 720) {
                this.x = 500;
                this.y = 270;
            }
        }
        draw() {
            //Kreis links
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.arc(this.x + 40, this.y, 8, 0, 2 * Math.PI);
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fill();
            //Kreis rechts
            Semesteraufgabe1.crc2.beginPath();
            Semesteraufgabe1.crc2.arc(this.x + 70, this.y, 8, 0, 2 * Math.PI);
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fill();
            //Balken links
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fillRect(this.x + 43, this.y - 40, 5, 43);
            //Balken rechts
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fillRect(this.x + 73, this.y - 40, 5, 43);
            //Balken oben
            Semesteraufgabe1.crc2.fillStyle = this.color;
            Semesteraufgabe1.crc2.fillRect(this.x + 43, this.y - 40, 32, 5);
        }
    }
    Semesteraufgabe1.Note = Note;
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
