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
            this.x += 2;
            this.y += -2;
            this.x += Math.random();
            if (this.y > 800) {
                this.x = 500;
                this.y = 500;
            }
        }
        draw() {
            Semesteraufgabe1.crc2.beginPath(); //Gondel
            Semesteraufgabe1.crc2.fillStyle = "#818080";
            Semesteraufgabe1.crc2.fillRect(this.x, this.y, 50, -40);
            Semesteraufgabe1.crc2.strokeStyle = "#818080";
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.beginPath(); //Fenster rechts
            Semesteraufgabe1.crc2.fillStyle = "#1B1B1B";
            Semesteraufgabe1.crc2.fillRect(this.x + 26, this.y - 17, 20, -20);
            Semesteraufgabe1.crc2.strokeStyle = "#1B1B1B";
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.beginPath(); //Fenster links
            Semesteraufgabe1.crc2.fillStyle = "#1B1B1B";
            Semesteraufgabe1.crc2.fillRect(this.x + 3, this.y - 17, 20, -20);
            Semesteraufgabe1.crc2.strokeStyle = "#1B1B1B";
            Semesteraufgabe1.crc2.stroke();
            Semesteraufgabe1.crc2.beginPath(); //Aufh�ngung
            Semesteraufgabe1.crc2.fillStyle = "#818080";
            Semesteraufgabe1.crc2.fillRect(this.x + 22, this.y - 40, 5, -5);
            Semesteraufgabe1.crc2.strokeStyle = "#818080";
            Semesteraufgabe1.crc2.stroke();
        }
    }
    Semesteraufgabe1.Note = Note;
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
