/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10_Neu {
    export interface Products {
        typ: string;
        name: string;
        preis: number;
    }

    export let article: Products[] = [
        { typ: "tree", name: "Fichte", preis: 20.00 },
        { typ: "tree", name: "Weisstanne", preis: 25.00 },
        { typ: "tree", name: "Gruentanne", preis: 15.00 },
        { typ: "tree", name: "Nordmanntanne", preis: 30.00 },
        { typ: "feet", name: "50cm Fuss", preis: 30 },
        { typ: "feet", name: "40cm Fuss", preis: 25 },
        { typ: "feet", name: "30cm Fuss", preis: 20 },
        { typ: "feet", name: "20cm Fuss", preis: 15 },
        { typ: "shipping", name: "Standardversand", preis: 10 },
        { typ: "shipping", name: "Premiumversand", preis: 15 },
        { typ: "shipping", name: "Selbstabholer", preis: 0 },
        { typ: "Deko", name: "Kugel, bunt mit Glitter", preis: 2.65 },
        { typ: "Deko", name: "Kugel, rot", preis: 1.99 },
        { typ: "Deko", name: "Kugel, blau", preis: 1.99 },
        { typ: "Deko", name: "Kugel, silber", preis: 2.65 },
        { typ: "Deko", name: "Kugel, gold", preis: 2.65 },
        { typ: "Deko", name: "Glocken-Anh�nger, klein", preis: 1.35 },
        { typ: "Deko", name: "Glocken-Anh�nger, gro�", preis: 2.65 },
        { typ: "Deko", name: "Stern-Anh�nger, klein", preis: 1.35 },
        { typ: "Deko", name: "Stern-Anh�nger, gro�", preis: 2.65 },
        { typ: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { typ: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];


    export let b: string[][] = [];

    for (var i: number = 0; i < article.length; i++) {


        if (article[i].typ == "Beleuchtung") {
            var temp: any = [article[i].name, article[i].preis];
            b.push(temp);
        }
    }
}