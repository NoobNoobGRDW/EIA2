/*
Aufgabe: Semesteraufgabe
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/



namespace Spiel {
        
    export class play {
        sound:HTMLAudioElement;
        
    
    constructor(_sound:any) {
            this.sound=_sound;
            
        }

            
           playSound():void{
             this.sound.play();
               
                 
           }
        

    
        
    }
}