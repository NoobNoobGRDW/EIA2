/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Spiel;
(function (Spiel) {
    class Play {
        constructor(_sound) {
            this.sound = _sound;
        }
        playSound() {
            this.sound.play();
        }
    }
    Spiel.Play = Play;
})(Spiel || (Spiel = {}));
