/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Spiel {

    export class AnimatedObjects {

        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {

            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

        move(): void {
        }

        draw(): void {
        }
        
        update(): void {
            this.move();
            this.draw();
        }
    }
}