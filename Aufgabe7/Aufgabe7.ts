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
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, \nGeschlecht (m oder w) und individueller Kommentar");
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
        let divide: string[] = _input.split(",");

        if (parseInt(divide[0]) == NaN) {
            return "Matrikelnummer keine Nummer";
        }
        
        
        var geschlecht: boolean = parseInt(divide[4]) == 1;   //(splitted[4] === "true");

        let student: StudentData = {
            Matrikelnummer: parseInt(divide[0]),
            Name: divide[1],
            Vorname: divide[2],
            Alter: parseInt(divide[3]),
            Geschlecht: geschlecht,
            Kommentar: divide[5]
        };

        students.push(student);


        return "Eingegebene Daten: " + "\nMatrikelnummer: " + student.Matrikelnummer + "\nName: " + student.Name + "\nVorname: " + student.Vorname + "\nAlter: " + student.Alter + "\nGeschlecht: " + student.Geschlecht + "\nKommentar: " + student.Kommentar;
    }
    
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].Matrikelnummer == _matrikel) {
                return "Student: " + "\nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + students[i].Geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
            
                else {
                return "Matrikelnummer nicht vorhanden";
                }
        }

        return;
    }
}