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
    var land;
    //Baumarten
    let fichte = {
        name: "Fichte",
        price: 25,
    };
    let weisstanne = {
        name: "Weisstanne",
        price: 30,
    };
    let gruentanne = {
        name: "Gruentanne",
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
        name: "Weisse Kugeln",
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
        name: "Weisse Kerzen",
        price: 1,
    };
    let kerzeBlau = {
        name: "Blaue Kerzen",
        price: 3,
    };
    //F��e
    let fussGross = {
        name: "50cm Fuss",
        price: 30,
    };
    let fussMittel = {
        name: "40cm Fuss",
        price: 25,
    };
    let fussKlein = {
        name: "30cm Fuss",
        price: 20,
    };
    let fussWinzig = {
        name: "20cm Fuss",
        price: 15,
    };
    //Lieferung
    let standard = {
        name: "Standardversand",
    };
    let express = {
        name: "Expressversand",
    };
    let abhol = {
        name: "Selbstabholung",
    };
    function init(_event) {
        //Baum
        let tree = [fichte, weisstanne, gruentanne, nordmann];
        for (let i = 0; i < tree.length; i++) {
            let baumFieldS = document.getElementById("baum");
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            radioButton.value = tree[i].name;
            radioButton.id = tree[i].name;
            let label = document.createElement("label");
            label.htmlFor = tree[i].name;
            label.innerText = " " + tree[i].name + " " + tree[i].price + " Euro";
            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
        }
        // Schmuck
        let decoration = [kugelRot, kugelWeiss, stern, kerzeRot, kerzeWeiss, kerzeBlau];
        for (let i = 0; i < decoration.length; i++) {
            let decorationFieldS = document.getElementById("schmuck");
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.value = decoration[i].name;
            checkBox.id = decoration[i].name;
            let label01 = document.createElement("label01");
            label01.htmlFor = decoration[i].name;
            label01.innerText = " " + decoration[i].name + " " + decoration[i].price + " Euro";
            let anzahl = document.createElement("input");
            anzahl.type = "number";
            anzahl.name = "Stepper";
            anzahl.step = "1";
            anzahl.min = "0";
            anzahl.max = "20";
            anzahl.value = "0";
            decorationFieldS.appendChild(checkBox);
            decorationFieldS.appendChild(label01);
            decorationFieldS.appendChild(anzahl);
        }
        //Standf��e
        let feet = [fussGross, fussMittel, fussKlein, fussWinzig];
        for (let i = 0; i < feet.length; i++) {
            let feetFieldS = document.getElementById("fuss");
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            radioButton.value = feet[i].name;
            radioButton.id = feet[i].name;
            let label02 = document.createElement("label02");
            label02.htmlFor = feet[i].name;
            label02.innerText = " " + feet[i].name + " " + feet[i].price + " Euro";
            feetFieldS.appendChild(radioButton);
            feetFieldS.appendChild(label02);
        }
        //Lieferadresse
        let adress = document.getElementById("adress");
        name = document.createElement("input");
        name.type = "text";
        name.name = "AdresseNachname";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        adress.appendChild(name);
        vorname = document.createElement("input");
        vorname.type = "text";
        vorname.name = "AdresseVorname";
        vorname.placeholder = "Vorname";
        vorname.pattern = "[a-zA-Z]{1,}";
        vorname.required = true;
        adress.appendChild(vorname);
        strasseNr = document.createElement("input");
        strasseNr.type = "text";
        strasseNr.name = "AdresseStrasse";
        strasseNr.placeholder = "Strasse, Hausnummer";
        strasseNr.pattern = "[0-9, a-zA-Z]{1,}";
        strasseNr.required = true;
        adress.appendChild(strasseNr);
        plzOrt = document.createElement("input");
        plzOrt.type = "text";
        plzOrt.name = "PostleitzahlOrt";
        plzOrt.placeholder = "Postleitzahl, Ort";
        plzOrt.pattern = "[0-9, a-zA-Z]{1,}";
        plzOrt.required = true;
        adress.appendChild(plzOrt);
        land = document.createElement("input");
        land.type = "text";
        land.name = "Land";
        land.placeholder = "Land";
        land.pattern = "[a-zA-Z]{1,}";
        land.required = true;
        adress.appendChild(land);
        //Lieferoptionen
        let shipping = [standard, express, abhol];
        for (let i = 0; i < shipping.length; i++) {
            let shipSelect = document.getElementById("lieferung");
            let ship = document.createElement("option");
            ship.value = shipping[i].name;
            ship.innerText = shipping[i].name;
            shipSelect.appendChild(ship);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
