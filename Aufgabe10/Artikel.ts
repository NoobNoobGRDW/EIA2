/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe10 {

    export interface Products {
        name: string;
        price: number;
        typ: string;
    }

    //Baumarten
    export let fichte: Products = {
        name: "Fichte",
        price: 25,
        typ: "tree",
    };
    export let weisstanne: Products = {
        name: "Weisstanne",
        price: 30,
        typ: "tree",
    };
    export let gruentanne: Products = {
        name: "Gruentanne",
        price: 20,
        typ: "tree",
    };
    export let nordmann: Products = {
        name: "Nordmanntanne",
        price: 35,
        typ: "tree",
    };


    //Schmuckarten
    export let kugelRot: Products = {
        name: "Rote Kugeln",
        price: 3,
        typ: "deko",
    };
    export let kugelWeiss: Products = {
        name: "Weisse Kugeln",
        price: 4,
        typ: "deko",
    };
    export let stern: Products = {
        name: "Weihnachtsstern",
        price: 15,
        typ: "deko",
    };
    export let kerzeRot: Products = {
        name: "Rote Kerzen",
        price: 2,
        typ: "deko",
    };
    export let kerzeWeiss: Products = {
        name: "Weisse Kerzen",
        price: 1,
        typ: "deko",
    };
    export let kerzeBlau: Products = {
        name: "Blaue Kerzen",
        price: 3,
        typ: "deko",
    };


    //Füße
    export let fussGross: Products = {
        name: "50cm Fuss",
        price: 30,
        typ: "feet",
    };
    export let fussMittel: Products = {
        name: "40cm Fuss",
        price: 25,
        typ: "feet",
    };
    export let fussKlein: Products = {
        name: "30cm Fuss",
        price: 20,
        typ: "feet",
    };
    export let fussWinzig: Products = {
        name: "20cm Fuss",
        price: 15,
        typ: "feet",
    };

    //Lieferung
    export let standard: Products = {
        name: "Standardversand",
        typ: "shipping",
        price: 5,
    };

    export let premium: Products = {
        name: "Premiumversand",
        typ: "shipping",
        price: 10,
    };

    export let abhol: Products = {
        name: "Selbstabholung",
        typ: "shipping",
        price: 0,
    };

export let arrayArtikel = [fichte, weisstanne, gruentanne, nordmann, kugelRot, kugelWeiss, stern, kerzeRot, kerzeWeiss, kerzeBlau, fussGross, fussMittel, fussKlein, fussWinzig, standard, premium, abhol];

}