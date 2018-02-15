/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Semesteraufgabe1;
(function (Semesteraufgabe1) {
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
    Semesteraufgabe1.MovingObjects = MovingObjects;
})(Semesteraufgabe1 || (Semesteraufgabe1 = {}));
