/*
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class MovingObjects {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        move() {
        }
        draw() {
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Aufgabe6.MovingObjects = MovingObjects;
})(Aufgabe6 || (Aufgabe6 = {}));
