/*
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class skiaaa extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y, _dx, _dy, _color);
        }
        move() {
            this.x += Math.random() + 2; //Bewegung X
            this.y += Math.random() + 3; //Bewegung Y
            if (this.y > 800) {
                this.x = 265;
                this.y = 350;
            }
        }
        draw() {
            Aufgabe6.crc2.fillStyle = "#885E2E";
            Aufgabe6.crc2.fillRect(this.x, this.y, 7, -30); //Beine
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 25, this.y - 13); //rechter Ski
            Aufgabe6.crc2.lineTo(this.x + 25, this.y + 13);
            Aufgabe6.crc2.strokeStyle = "#5C5A58";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 20, this.y - 13); //linker Ski
            Aufgabe6.crc2.lineTo(this.x + 30, this.y + 13);
            Aufgabe6.crc2.strokeStyle = "#5C5A58";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fillRect(this.x, this.y - 7, 7, -25); //Torso
            Aufgabe6.crc2.fillRect(this.x - 4, this.y - 9, 4, -16); //linker Arm
            Aufgabe6.crc2.fillRect(this.x + 6, this.y - 9, 4, -16); //rechter Arm 
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 2, this.y - 30, 6, 0, 2 * Math.PI); //Helm
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 3, this.y - 29, 5, 0, 2 * Math.PI); //Kopf
            Aufgabe6.crc2.fillStyle = "#C9B284";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.skiaaa = skiaaa;
})(Aufgabe6 || (Aufgabe6 = {}));
