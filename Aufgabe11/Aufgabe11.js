/*
Aufgabe: 11
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var vorname;
    var strasseNr;
    var plzOrt;
    var land;
    var korbBaum = ["kein Baum", "0 "];
    var korbFuss = ["kein Fuss", "0 "];
    var korbSchmuck = []; //multi
    var korbLiefer = ["keine Lieferoption", "0 "];
    function createElements() {
        //Baum
        let baumart = document.getElementById("baum");
        for (let i = 0; i < Aufgabe11.article.length; i++) {
            if (Aufgabe11.article[i].typ == "tree") {
                // Radiobutton
                var radioBaum = document.createElement("input");
                radioBaum.type = "radio";
                radioBaum.name = "radioGroupBaumart";
                radioBaum.value = "radio01" + i;
                radioBaum.id = "radio01" + i;
                baumart.appendChild(radioBaum);
                // Text/Label
                var label01 = document.createElement("label");
                label01.id = "label" + i;
                label01.htmlFor = radioBaum.id;
                label01.innerText = Aufgabe11.article[i].name + " " + Aufgabe11.article[i].preis + " Euro";
                baumart.appendChild(label01);
            }
        }
        //Schmuck
        let schmuck = document.getElementById("schmuck");
        //Liste
        for (let i = 0; i < Aufgabe11.article.length; i++) {
            if (Aufgabe11.article[i].typ == "decoration") {
                //Checkbox
                var checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.name = "CheckboxSchmuck";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                schmuck.appendChild(checkBox);
                //Text ausw�hlbar
                var label03 = document.createElement("label");
                label03.id = "label2." + i;
                label03.htmlFor = checkBox.id;
                label03.innerText = Aufgabe11.article[i].name + " " + Aufgabe11.article[i].preis + " Euro";
                schmuck.appendChild(label03);
                //Stepper
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperDekoartikel" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuck.appendChild(stepper);
                var br = document.createElement("br");
                schmuck.appendChild(br);
            }
        }
        //Standfu�
        let fuss = document.getElementById("fuss");
        for (let i = 0; i < Aufgabe11.article.length; i++) {
            if (Aufgabe11.article[i].typ == "feet") {
                // Radiobutton
                var radioFuss = document.createElement("input");
                radioFuss.type = "radio";
                radioFuss.name = "radioGroupFuss";
                radioFuss.value = "radio02" + i;
                radioFuss.id = "radio02" + i;
                fuss.appendChild(radioFuss);
                // Text/Label
                var label02;
                label02 = document.createElement("label");
                label02.id = "label" + i;
                label02.htmlFor = radioFuss.id;
                label02.innerText = Aufgabe11.article[i].name + " " + Aufgabe11.article[i].preis + " Euro";
                fuss.appendChild(label02);
            }
        }
        //Lieferoptionen
        let lieferoption = document.getElementById("lieferOpt");
        //Selectbox erzeugen
        let selectBox = document.createElement("select");
        selectBox.name = "BoxLieferung";
        selectBox.id = "boxLieferung";
        lieferoption.appendChild(selectBox);
        //Auswahlm�glichkeiten
        for (let i = 0; i < Aufgabe11.article.length; i++) {
            if (Aufgabe11.article[i].typ == "shipping") {
                var ship = document.createElement("option");
                ship.innerText = Aufgabe11.article[i].name;
                ship.id = "checkLiefer" + i;
                selectBox.appendChild(ship);
            }
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
        //Submit button zur �berpr�fung erstellen
        let button = document.getElementById("pruefe");
        let submit = document.createElement("input");
        submit.type = "submit";
        button.appendChild(submit);
        let checkout = document.createElement("button");
        checkout.name = "Button";
        checkout.type = "button";
        checkout.innerText = "Bestellung �berpr�fen";
        checkout.addEventListener("mousedown", pruefe);
        submit.appendChild(checkout);
    }
    //Warenkorb erzeugen
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let checkBoxes = [];
        let radioBoxes = [];
        let gesamtpreis = 0;
        for (let i = 0; i < Aufgabe11.article.length; i++) {
            //Baumart Warenkorb
            if (target.id == "radio01" + i) {
                radioBoxes[i] = document.getElementById("check" + i);
                korbBaum[0] = Aufgabe11.article[i].name;
                korbBaum[1] = "" + Aufgabe11.article[i].preis;
            }
            //Schmuck Warenkorb
            if (Aufgabe11.article[i].typ == "decoration") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            //Fu� Warenkorb
            if (target.id == "radio02" + i) {
                korbFuss[0] = Aufgabe11.article[i].name;
                korbFuss[1] = "" + Aufgabe11.article[i].preis;
            }
            //Lieferoption Warenkorb
            if (target.value == Aufgabe11.article[i].name && target.id == "boxLieferung") {
                korbLiefer[0] = Aufgabe11.article[i].name;
                korbLiefer[1] = "" + Aufgabe11.article[i].preis;
            }
            //Schmuck Warenkorb
            if (target.id == "check" + i || target.id == "stepper" + i) {
                korbSchmuck[i] = [Aufgabe11.article[i].name, "" + Math.round((Aufgabe11.article[i].preis * parseInt(stepper[i].value) * 100)) / 100];
            }
        }
        let korb = document.getElementById("korbUnter");
        korb.style.height = "auto";
        korb.innerHTML += "" + korbBaum[0] + " " + korbBaum[1] + " Euro <br>";
        korb.innerHTML += korbFuss[0] + ": " + korbFuss[1] + " Euro <br>";
        korb.innerHTML += " " + korbLiefer[0] + ": " + korbLiefer[1] + " Euro <br>";
        gesamtpreis = parseFloat(korbBaum[1]) + parseFloat(korbFuss[1]) + parseFloat(korbLiefer[1]);
        for (let i = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgew�hlt
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(korbSchmuck[i][1]); //preis dazurechnen
                korb.innerHTML += "" + korbSchmuck[i][0] + " " + korbSchmuck[i][1] + " Euro <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
        let price = document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += gesamtpreis + " Euro";
    }
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
})(Aufgabe11 || (Aufgabe11 = {}));
