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
    export let Artikel: Products [] = [
{
        name: "Fichte",
        price: 25,
        typ: "tree",
    },
{
        name: "Weisstanne",
        price: 30,
        typ: "tree",
    },
{
        name: "Gruentanne",
        price: 20,
        typ: "tree",
    },
{
        name: "Nordmanntanne",
        price: 35,
        typ: "tree",
    },


    //Schmuckarten
{
        name: "Rote Kugeln",
        price: 3,
        typ: "deko",
    },
{
        name: "Weisse Kugeln",
        price: 4,
        typ: "deko",
    },
{
        name: "Weihnachtsstern",
        price: 15,
        typ: "deko",
    },
{
        name: "Rote Kerzen",
        price: 2,
        typ: "deko",
    },
{
        name: "Weisse Kerzen",
        price: 1,
        typ: "deko",
    },
{
        name: "Blaue Kerzen",
        price: 3,
        typ: "deko",
    },


    //Füße
{
        name: "50cm Fuss",
        price: 30,
        typ: "feet",
    },
{
        name: "40cm Fuss",
        price: 25,
        typ: "feet",
    },
{
        name: "30cm Fuss",
        price: 20,
        typ: "feet",
    },
{
        name: "20cm Fuss",
        price: 15,
        typ: "feet",
    },

    //Lieferung
{
        name: "Standardversand",
        typ: "shipping",
        price: 5,
    },

{
        name: "Premiumversand",
        typ: "shipping",
        price: 10,
    },

{
        name: "Selbstabholung",
        typ: "shipping",
        price: 0,
    },
];

}