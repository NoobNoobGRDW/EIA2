/*
Aufgabe: 11
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {

    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);

    var name: HTMLInputElement;
    var vorname: HTMLInputElement;
    var strasseNr: HTMLInputElement;
    var plzOrt: HTMLInputElement;
    var land: HTMLInputElement;



    var korbBaum: string[] = ["kein Baum", "0 "];
    var korbFuss: string[] = ["kein Fuss", "0 "];
    var korbSchmuck: string[][] = []; //multi
    var korbLiefer: string[] = ["keine Lieferoption", "0 "];

    function createElements(): void {

        //Baum

        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baum");
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "tree") {

                // Radiobutton
                var radioBaum: HTMLInputElement = document.createElement("input");
                radioBaum.type = "radio";
                radioBaum.name = "radioGroupBaumart";
                radioBaum.value = "radio01" + i;
                radioBaum.id = "radio01" + i;
                baumart.appendChild(radioBaum);

                // Text/Label
                var label01 = document.createElement("label");
                label01.id = "label" + i;
                label01.htmlFor = radioBaum.id;
                label01.innerText = article[i].name + " " + article[i].preis + " Euro";
                baumart.appendChild(label01);

            }
        }


        //Schmuck

        let schmuck: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuck");

        //Liste
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "decoration") {

                //Checkbox
                var checkBox: HTMLInputElement = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.name = "CheckboxSchmuck";
                checkBox.value = "check";
                checkBox.id = "check" + i;
                schmuck.appendChild(checkBox);

                //Text auswählbar
                var label03: HTMLLabelElement = document.createElement("label");
                label03.id = "label2." + i;
                label03.htmlFor = checkBox.id;
                label03.innerText = article[i].name + " " + article[i].preis + " Euro";
                schmuck.appendChild(label03);

                //Stepper
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuck" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuck.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                schmuck.appendChild(br);
            }
        }

        //Standfuß
        let fuss: HTMLDivElement = <HTMLDivElement>document.getElementById("fuss");
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "feet") {

                // Radiobutton
                var radioFuss: HTMLInputElement = document.createElement("input");
                radioFuss.type = "radio";
                radioFuss.name = "radioGroupFuss";
                radioFuss.value = "radio02" + i;
                radioFuss.id = "radio02" + i;
                fuss.appendChild(radioFuss);

                // Text/Label
                var label02: HTMLLabelElement;
                label02 = document.createElement("label");
                label02.id = "label" + i;
                label02.htmlFor = radioFuss.id;
                label02.innerText = article[i].name + " " + article[i].preis + " Euro";
                fuss.appendChild(label02);


            }
        }

        //Lieferoptionen

        let lieferoption: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferOpt");

        //Selectbox erzeugen

        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "BoxLieferung";
        selectBox.id = "boxLieferung";
        lieferoption.appendChild(selectBox);

        //Auswahlmöglichkeiten

        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "shipping") {
                var ship: HTMLElement = document.createElement("option");
                ship.innerText = article[i].name;
                ship.id = "checkLiefer" + i;
                selectBox.appendChild(ship);
            }
        }



        //Lieferadresse
        let adress: HTMLDivElement = <HTMLDivElement>document.getElementById("adress");
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






        //Submit button zur Überprüfung erstellen

        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("pruefe");
        let submit: HTMLInputElement = document.createElement("input");
        submit.type = "submit";
        button.appendChild(submit);
        let checkout: HTMLButtonElement = document.createElement("button");
        checkout.name = "Button";
        checkout.type = "button";
        checkout.innerText = "Bestellung überprüfen";
        checkout.addEventListener("mousedown", pruefe);
        submit.appendChild(checkout);
    }

    //Warenkorb erzeugen

    function warenkorb(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let radioBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < article.length; i++) {



            //Baumart Warenkorb
            if (target.id == "radio01" + i) {
                radioBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
                korbBaum[0] = article[i].name;
                korbBaum[1] = "" + article[i].preis;
            }



            //Fuß Warenkorb
            if (target.id == "radio02" + i) {
                korbFuss[0] = article[i].name;
                korbFuss[1] = "" + article[i].preis;
            }

            //Lieferoption Warenkorb
            if (target.value == article[i].name && target.id == "boxLieferung") {
                korbLiefer[0] = article[i].name;
                korbLiefer[1] = "" + article[i].preis;
            }

            //Schmuck Warenkorb
            if (article[i].typ == "decoration") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);

                korbSchmuck[i] = [article[i].name, "" + Math.round((article[i].preis * parseFloat(stepper[i].value) * 100)) / 100];
            }

        }

        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("korbUnter");

        korb.style.height = "auto";
        korb.innerHTML += "" + korbBaum[0] + " " + korbBaum[1] + " Euro <br>";
        korb.innerHTML += korbFuss[0] + ": " + korbFuss[1] + " Euro <br>";
        korb.innerHTML += " " + korbLiefer[0] + ": " + korbLiefer[1] + " Euro <br>";

        gesamtpreis = parseFloat(korbBaum[1]) + parseFloat(korbFuss[1]) + parseFloat(korbLiefer[1]); //float= Zahl mit Kommastelle
        for (let i: number = 0; i < stepper.length; i++) {

            //Wenn anzahl nicht gleich 0 und die checkbox ausgewählt

            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(korbSchmuck[i][1]);//preis dazurechnen
                korb.innerHTML += "" + korbSchmuck[i][0] + " " + korbSchmuck[i][1] + " Euro <br>";
            }
        }

        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";

        let price: HTMLElement = <HTMLElement>document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += gesamtpreis + " Euro <br>";

    }


    //Bestellung prüfen-Funktion
    function pruefe(_event: MouseEvent): void {
        let ausgabe: HTMLParagraphElement = document.createElement("p");
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
}