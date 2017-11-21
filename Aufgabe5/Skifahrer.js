/*
Aufgabe: 5
Name: Kuenz,Linus
Matrikel: 256331
Datum: 16.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class skiaaa {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
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
            Aufgabe5.crc2.fillStyle = "#885E2E";
            Aufgabe5.crc2.fillRect(this.x, this.y, 7, -30); //Beine
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 25, this.y - 13); //rechter Ski
            Aufgabe5.crc2.lineTo(this.x + 25, this.y + 13);
            Aufgabe5.crc2.strokeStyle = "#5C5A58";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 20, this.y - 13); //linker Ski
            Aufgabe5.crc2.lineTo(this.x + 30, this.y + 13);
            Aufgabe5.crc2.strokeStyle = "#5C5A58";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x, this.y - 7, 7, -25); //Torso
            Aufgabe5.crc2.fillRect(this.x - 4, this.y - 9, 4, -16); //linker Arm
            Aufgabe5.crc2.fillRect(this.x + 6, this.y - 9, 4, -16); //rechter Arm 
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 2, this.y - 30, 6, 0, 2 * Math.PI); //Helm
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 3, this.y - 29, 5, 0, 2 * Math.PI); //Kopf
            Aufgabe5.crc2.fillStyle = "#C9B284";
            Aufgabe5.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe5.skiaaa = skiaaa;
})(Aufgabe5 || (Aufgabe5 = {}));
