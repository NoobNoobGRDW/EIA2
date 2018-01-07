/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    var name;
    var vorname;
    var strasseNr;
    var plzOrt;
    var stadt;
    //Baumarten
    let fichte = {
        name: "Fichte",
        price: 25,
    };
    let weisstanne = {
        name: "Wei�tanne",
        price: 30,
    };
    let gruentanne = {
        name: "Gr�ntanne",
        price: 20,
    };
    let nordmann = {
        name: "Nordmanntanne",
        price: 35,
    };
    //Schmuckarten
    let kugelRot = {
        name: "Rote Kugeln",
        price: 3,
    };
    let kugelWeiss = {
        name: "Wei�e Kugeln",
        price: 4,
    };
    let stern = {
        name: "Weihnachtsstern",
        price: 15,
    };
    let kerzeRot = {
        name: "Rote Kerzen",
        price: 2,
    };
    let kerzeWeiss = {
        name: "Wei�e Kerzen",
        price: 1,
    };
    let kerzeBlau = {
        name: "Blaue Kerzen",
        price: 3,
    };
    function init(_event) {
        let tree = [fichte, weisstanne, gruentanne, nordmann];
        for (let i = 0; i < tree.length; i++) {
            let baumFieldS = document.getElementById("bau");
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            radioButton.value = tree[i].name;
            radioButton.id = tree[i].name;
            let label = document.createElement("label");
            label.htmlFor = tree[i].name;
            label.innerText = " " + tree[i].name + " " + tree[i].price + "�";
            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
