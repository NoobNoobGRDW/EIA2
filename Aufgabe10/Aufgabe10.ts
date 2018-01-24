/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe10 {
    window.addEventListener("load", init);

    var name: HTMLInputElement;
    var vorname: HTMLInputElement;
    var strasseNr: HTMLInputElement;
    var plzOrt: HTMLInputElement;
    var land: HTMLInputElement;

    

    var korbBaum: string[] = ["keine Baumart ausgewählt", "0"];
    var korbFuss: string[] = ["keiner ausgewählt", "0"];
   /* var korbSchmuck: string[] = [b[0][0], "" + b[0][1]];*/
    var korbLieferung: string[] = ["keine Lieferoption ausgewählt", "0"];





    function init(_event: Event): void {
    //Baum
        let tree: arrayArtikel = [fichte, weisstanne, gruentanne, nordmann];
        for (let i: number = 0; i < tree.length; i++) {
            let baumFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("baum");

            let radioButton: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            radioButton.value = tree[i].name;
            radioButton.id = tree[i].name;

            let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
            label.htmlFor = tree[i].name;
            label.innerText = " " + tree[i].name + " " + tree[i].price + " Euro";

            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
        }

        // Schmuck
        let decoration: arrayArtikel = [kugelRot, kugelWeiss, stern, kerzeRot, kerzeWeiss, kerzeBlau];

        for (let i: number = 0; i < decoration.length; i++) {
            let decorationFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("schmuck");

            let checkBox: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.value = decoration[i].name;
            checkBox.id = decoration[i].name;

            let label01: HTMLLabelElement = <HTMLLabelElement>document.createElement("label01");
            label01.htmlFor = decoration[i].name;
            label01.innerText = " " + decoration[i].name + " " + decoration[i].price + " Euro";

            let anzahl: HTMLInputElement = <HTMLInputElement>document.createElement("input");
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

        //Standfüße
        let feet: arrayArtikel = [fussGross, fussMittel, fussKlein, fussWinzig];
        for (let i: number = 0; i < feet.length; i++) {
            let feetFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("fuss");

            let radioButton: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            radioButton.value = feet[i].name;
            radioButton.id = feet[i].name;

            let label02: HTMLLabelElement = <HTMLLabelElement>document.createElement("label02");
            label02.htmlFor = feet[i].name;
            label02.innerText = " " + feet[i].name + " " + feet[i].price + " Euro";

            feetFieldS.appendChild(radioButton);
            feetFieldS.appendChild(label02);
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


        //Lieferoptionen
        let shipping: arrayArtikel = [standard, premium, abhol];

        for (let i: number = 0; i < shipping.length; i++) {
            let shipSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("lieferung");

            let ship: HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
            ship.value = shipping[i].name;
            ship.innerText = shipping[i].name;

            shipSelect.appendChild(ship);
        }

        //Bestellung prüfen-Button
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("pruefe");                    //Button Check
        let check: HTMLButtonElement = document.createElement("button");
        check.name = "Button";
        check.type = "button";
        check.innerText = "Los!";
        check.addEventListener("mousedown", pruefe);
        button.appendChild(check);

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
        
        //Warenkorb
        function warenkorb(_event: Event): void {
            let target: HTMLInputElement = <HTMLInputElement>_event.target;
            let stepper: HTMLInputElement[] = [];
            let stepper2: HTMLInputElement[] = [];
            let checkBoxes: HTMLInputElement[] = [];
            let checkBoxes2: HTMLInputElement[] = [];
            let gesamtpreis: number = 0;

            for (let i: number = 0; i < arrayArtikel.length; i++) {

                //Baumart
                if (arrayArtikel[i].typ == "tree") {
                    checkBoxes[i] = <HTMLInputElement>document.getElementById(tree[i].name);
                    korbBaum[0] = tree[i].name;
                    korbBaum[1] = "" + (tree[i].price);

                }

                let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("korb");
                korb.innerHTML += "" + korbBaum[0] + " " + korbBaum[1] + "€ <br>";

            }
        }




}    
}