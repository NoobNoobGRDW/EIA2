/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10_Neu {
    export interface Products {
        art: string;
        name: string;
        preis: number;
    }

    export let article: Products[] = [
        { art: "tree", name: "Nordmanntanne", preis: 20.00 },
        { art: "tree", name: "Fichte", preis: 18.00 },
        { art: "tree", name: "Kiefer", preis: 15.00 },
        { art: "Halter", name: "Standard-Halterung", preis: 29.99 },
        { art: "Halter", name: "Premium-Halterung", preis: 59.99 },
        { art: "Halter", name: "Deluxe-Halterung in Sternenform", preis: 89.99 },
        { art: "Beleuchtung", name: "Lichterkette Standard", preis: 32.44 },
        { art: "Beleuchtung", name: "Lichterkette LED", preis: 39.99 },
        { art: "Beleuchtung", name: "Lichterkette mit Kerzen", preis: 14.95 },
        { art: "Deko", name: "Kugel, bunt mit Glitter", preis: 2.65 },
        { art: "Deko", name: "Kugel, rot", preis: 1.99 },
        { art: "Deko", name: "Kugel, blau", preis: 1.99 },
        { art: "Deko", name: "Kugel, silber", preis: 2.65 },
        { art: "Deko", name: "Kugel, gold", preis: 2.65 },
        { art: "Deko", name: "Glocken-Anh‰nger, klein", preis: 1.35 },
        { art: "Deko", name: "Glocken-Anh‰nger, groﬂ", preis: 2.65 },
        { art: "Deko", name: "Stern-Anh‰nger, klein", preis: 1.35 },
        { art: "Deko", name: "Stern-Anh‰nger, groﬂ", preis: 2.65 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];
    
    
    export let b: string[][] = [];
    
    for (var i: number = 0; i < article.length; i++) {
        

        if (article[i].art == "Beleuchtung") {
           var temp: any = [article[i].name, article[i].preis]; 
           b.push(temp);
        }
    }
}