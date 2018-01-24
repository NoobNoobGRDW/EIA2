var Aufgabe10_Neu;
(function (Aufgabe10_Neu) {
    Aufgabe10_Neu.article = [
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
        { art: "Deko", name: "Glocken-Anh�nger, klein", preis: 1.35 },
        { art: "Deko", name: "Glocken-Anh�nger, gro�", preis: 2.65 },
        { art: "Deko", name: "Stern-Anh�nger, klein", preis: 1.35 },
        { art: "Deko", name: "Stern-Anh�nger, gro�", preis: 2.65 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];
    Aufgabe10_Neu.b = [];
    for (var i = 0; i < Aufgabe10_Neu.article.length; i++) {
        if (Aufgabe10_Neu.article[i].art == "Beleuchtung") {
            var temp = [Aufgabe10_Neu.article[i].name, Aufgabe10_Neu.article[i].preis];
            Aufgabe10_Neu.b.push(temp);
        }
    }
})(Aufgabe10_Neu || (Aufgabe10_Neu = {}));
