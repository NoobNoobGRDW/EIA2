/* 
Aufgabe: 7
Name: Kuenz,Linus
Matrikel: 256331
Datum: 01.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace StudiVZ {
    
    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;
    }
    
    var students: StudentData[] = [];
    var stop: boolean = false;


    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, \nGeschlecht (m oder w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        var student: any = _input.split(',', 6);
        
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}