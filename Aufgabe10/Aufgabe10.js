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
    var korbBaum = ["keine Baumart ausgew�hlt", "0"];
    var korbFuss = ["keiner ausgew�hlt", "0"];
    /* var korbSchmuck: string[] = [b[0][0], "" + b[0][1]];*/
    var korbLieferung = ["keine Lieferoption ausgew�hlt", "0"];
    function init(_event) {
        //Baum
        let tree = [Aufgabe10.fichte, Aufgabe10.weisstanne, Aufgabe10.gruentanne, Aufgabe10.nordmann];
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
        let decoration = [Aufgabe10.kugelRot, Aufgabe10.kugelWeiss, Aufgabe10.stern, Aufgabe10.kerzeRot, Aufgabe10.kerzeWeiss, Aufgabe10.kerzeBlau];
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
        let feet = [Aufgabe10.fussGross, Aufgabe10.fussMittel, Aufgabe10.fussKlein, Aufgabe10.fussWinzig];
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
        let shipping = [Aufgabe10.standard, Aufgabe10.premium, Aufgabe10.abhol];
        for (let i = 0; i < shipping.length; i++) {
            let shipSelect = document.getElementById("lieferung");
            let ship = document.createElement("option");
            ship.value = shipping[i].name;
            ship.innerText = shipping[i].name;
            shipSelect.appendChild(ship);
        }
        //Bestellung pr�fen-Button
        let button = document.getElementById("pruefe"); //Button Check
        let check = document.createElement("button");
        check.name = "Button";
        check.type = "button";
        check.innerText = "Los!";
        check.addEventListener("mousedown", pruefe);
        button.appendChild(check);
        //Bestellung pr�fen-Funktion
        function pruefe(_event) {
            let ausgabe = document.createElement("p");
            ausgabe.style.paddingBottom = "1em";
            if (name.checkValidity() == false || vorname.checkValidity() == false || name.checkValidity() == false || vorname.checkValidity() == false || strasseNr.checkValidity() == false || plzOrt.checkValidity() == false || land.checkValidity() == false) {
                ausgabe.innerText = "Deine Eingabe war nicht korrekt. Versuchs nochmal! ";
                ausgabe.style.color = "darkred";
                document.getElementById("pruefe").appendChild(ausgabe);
            }
            else {
                ausgabe.innerText = "Deine Daten sind korrekt, die Bestellung wird nun verarbeitet";
                ausgabe.style.color = "green";
                document.getElementById("pruefe").appendChild(ausgabe);
            }
        }
        //Warenkorb
        function warenkorb(_event) {
            let target = _event.target;
            let stepper = [];
            let stepper2 = [];
            let checkBoxes = [];
            let checkBoxes2 = [];
            let gesamtpreis = 0;
            for (let i = 0; i < tree.length; i++) {
                //Baumart
                if (tree[i].typ == "tree") {
                    checkBoxes[i] = document.getElementById(tree[i].name);
                    korbBaum[0] = tree[i].name;
                    korbBaum[1] = "" + (tree[i].price);
                }
                let korb = document.getElementById("korb");
                korb.innerHTML += "" + korbBaum[0] + " " + korbBaum[1] + "� <br>";
            }
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
