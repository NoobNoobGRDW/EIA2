/* 
Aufgabe: 6
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    export class MovingObjects {

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