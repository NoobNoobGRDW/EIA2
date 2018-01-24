/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10_Neu {

    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);

    var name: HTMLInputElement;
    var vorname: HTMLInputElement;
    var strasseNr: HTMLInputElement;
    var plzOrt: HTMLInputElement;
    var plz: HTMLInputElement;
    var land: HTMLInputElement;
    var label: HTMLLabelElement;

    
    var korbBaum: string[] = ["kein Baum", "0 "];
    var korbFuss: string[] = ["kein Fuss", "0 "];
    var korbSchmuck: string[][] = [];
    var korbLiefer: string[] = ["keine Lieferoption", "0 "];

    function createElements(): void {



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
                var label4 = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radioBaum.id;
                label4.innerText = article[i].name;
                baumart.appendChild(label4);

            }
        }

        //Standfu�:
        let fuss: HTMLDivElement = <HTMLDivElement>document.getElementById("fuss");
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "feet") {
                // Radiobutton
                var radioFuss: HTMLInputElement = document.createElement("input");
                radioFuss.type = "radio";
                radioFuss.name = "radioGroupHalterung";
                radioFuss.value = "radio02" + i;
                radioFuss.id = "radio02" + i;
                fuss.appendChild(radioFuss);

                // Text/Label
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioFuss.id;
                label.innerText = article[i].name;
                fuss.appendChild(label);
                var br: HTMLElement = document.createElement("br");
                fuss.appendChild(br);


            }
        }

        //Lieferoptionen:
        let lieferoption: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferOpt");

        //Selectbox erzeugen und Eigenschaften festlegen
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "BoxLieferung";
        selectBox.id = "boxLieferung";
        lieferoption.appendChild(selectBox);

        //Auswahlm�glichkeiten erzeugen
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "shipping") {
                var ship: HTMLElement = document.createElement("option");
                ship.innerText = article[i].name;
                ship.id = "checkLiefer" + i;
                selectBox.appendChild(ship);
            }
        }

        //Dekoartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuck");

        //Liste durch for Schleife erzeugen....f�r jedes Element:
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "decoration") {

                //....eine Checkbox,...
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxDekoartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                //...den Text zur Auswahlm�glichkeit,...
                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = article[i].name;
                schmuckartikel.appendChild(label2);

                //..und den Stepper erzeugen.
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperDekoartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                schmuckartikel.appendChild(br);
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




        //Button:

        //Submit button zur �berpr�fung erstellen
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("pruefe");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.style.padding = "0.75em 2em 0.75em 2em";
        submit.style.borderRadius = "0.5em";
        submit.style.border = "none";
        submit.innerText = "Los!";
        submit.addEventListener("mousedown", pruefe);
        button.appendChild(submit);
    }

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

            //Schmuck Warenkorb
            if (article[i].typ == "decoration") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }

            //Fu� Warenkorb
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
            if (target.id == "check" + i || target.id == "stepper" + i) {
                korbSchmuck[i] = [article[i].name, "" + Math.round((article[i].preis * parseInt(stepper[i].value) * 100)) / 100];
            }

        }

        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("korbUnter");

        korb.style.height = "auto";
        korb.innerHTML += "" + korbBaum[0] + " " + korbBaum[1] + " Euro <br>";
        korb.innerHTML += korbFuss[0] + ": " + korbFuss[1] + " Euro <br>";
        korb.innerHTML += " " + korbLiefer[0] + ": " + korbLiefer[1] + " Euro <br>";

        gesamtpreis = parseFloat(korbBaum[1]) + parseFloat(korbFuss[1]) + parseFloat(korbLiefer[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgew�hlt ist, dann......
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(korbSchmuck[i][1]);//preis dazurechnen
                korb.innerHTML += "" + korbSchmuck[i][0] + " " + korbSchmuck[i][1] + " Euro <br>";
            }
        }

        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";

        let price: HTMLElement = <HTMLElement>document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += Math.round(gesamtpreis * 100) / 100 + " Euro";

    }


    //Bestellung pr�fen-Funktion
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