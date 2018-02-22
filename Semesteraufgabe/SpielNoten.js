/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Spiel;
(function (Spiel) {
    class SpielNoten extends Spiel.AnimatedObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.x += 1;
            this.y += -2;
            if (this.x > 720) {
                this.x = 500;
                this.y = 260;
            }
        }
        draw() {
            //Kreis links
            Spiel.crc2.beginPath();
            Spiel.crc2.arc(this.x + 40, this.y, 8, 0, 2 * Math.PI);
            Spiel.crc2.fillStyle = this.color;
            Spiel.crc2.fill();
            //Kreis rechts
            Spiel.crc2.beginPath();
            Spiel.crc2.arc(this.x + 70, this.y, 8, 0, 2 * Math.PI);
            Spiel.crc2.fillStyle = this.color;
            Spiel.crc2.fill();
            //Balken links
            Spiel.crc2.fillStyle = this.color;
            Spiel.crc2.fillRect(this.x + 43, this.y - 40, 5, 43);
            //Balken rechts
            Spiel.crc2.fillStyle = this.color;
            Spiel.crc2.fillRect(this.x + 73, this.y - 40, 5, 43);
            //Balken oben
            Spiel.crc2.fillStyle = this.color;
            Spiel.crc2.fillRect(this.x + 43, this.y - 40, 32, 5);
        }
    }
    Spiel.SpielNoten = SpielNoten;
})(Spiel || (Spiel = {}));
