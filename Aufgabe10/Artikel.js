/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    //Baumarten
    Aufgabe10.fichte = {
        name: "Fichte",
        price: 25,
        typ: "tree",
    };
    Aufgabe10.weisstanne = {
        name: "Weisstanne",
        price: 30,
        typ: "tree",
    };
    Aufgabe10.gruentanne = {
        name: "Gruentanne",
        price: 20,
        typ: "tree",
    };
    Aufgabe10.nordmann = {
        name: "Nordmanntanne",
        price: 35,
        typ: "tree",
    };
    //Schmuckarten
    Aufgabe10.kugelRot = {
        name: "Rote Kugeln",
        price: 3,
        typ: "deko",
    };
    Aufgabe10.kugelWeiss = {
        name: "Weisse Kugeln",
        price: 4,
        typ: "deko",
    };
    Aufgabe10.stern = {
        name: "Weihnachtsstern",
        price: 15,
        typ: "deko",
    };
    Aufgabe10.kerzeRot = {
        name: "Rote Kerzen",
        price: 2,
        typ: "deko",
    };
    Aufgabe10.kerzeWeiss = {
        name: "Weisse Kerzen",
        price: 1,
        typ: "deko",
    };
    Aufgabe10.kerzeBlau = {
        name: "Blaue Kerzen",
        price: 3,
        typ: "deko",
    };
    //F��e
    Aufgabe10.fussGross = {
        name: "50cm Fuss",
        price: 30,
        typ: "feet",
    };
    Aufgabe10.fussMittel = {
        name: "40cm Fuss",
        price: 25,
        typ: "feet",
    };
    Aufgabe10.fussKlein = {
        name: "30cm Fuss",
        price: 20,
        typ: "feet",
    };
    Aufgabe10.fussWinzig = {
        name: "20cm Fuss",
        price: 15,
        typ: "feet",
    };
    //Lieferung
    Aufgabe10.standard = {
        name: "Standardversand",
        typ: "shipping",
        price: 5,
    };
    Aufgabe10.premium = {
        name: "Premiumversand",
        typ: "shipping",
        price: 10,
    };
    Aufgabe10.abhol = {
        name: "Selbstabholung",
        typ: "shipping",
        price: 0,
    };
})(Aufgabe10 || (Aufgabe10 = {}));
