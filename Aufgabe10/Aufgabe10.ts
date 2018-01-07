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
    var stadt: HTMLInputElement;

    interface Products {
        name: string;
        price: number;
    }


    //Baumarten
    let fichte: Products = {
        name: "Fichte",
        price: 25,
    };
    let weisstanne: Products = {
        name: "Weisstanne",
        price: 30,
    };
    let gruentanne: Products = {
        name: "Gruentanne",
        price: 20,
    };
    let nordmann: Products = {
        name: "Nordmanntanne",
        price: 35,
    };


    //Schmuckarten
    let kugelRot: Products = {
        name: "Rote Kugeln",
        price: 3,
    };
    let kugelWeiss: Products = {
        name: "Weisse Kugeln",
        price: 4,
    };
    let stern: Products = {
        name: "Weihnachtsstern",
        price: 15,
    };
    let kerzeRot: Products = {
        name: "Rote Kerzen",
        price: 2,
    };
    let kerzeWeiss: Products = {
        name: "Weisse Kerzen",
        price: 1,
    };
    let kerzeBlau: Products = {
        name: "Blaue Kerzen",
        price: 3,
    };
    
    
    //Füße
    let fussGross: Products = {
        name: "50cm Fuss",
        price: 30,
    };   
    let fussMittel: Products = {
        name: "40cm Fuss",
        price: 25,
    };
        let fussKlein: Products = {
        name: "30cm Fuss",
        price: 20,
    };

    
    function init(_event: Event): void {

        //Baum
        let tree: Products[] = [fichte, weisstanne, gruentanne, nordmann];
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
        let decoration: Products[] = [kugelRot, kugelWeiss, stern, kerzeRot, kerzeWeiss, kerzeBlau];

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
        let feet: Products[] = [fussGross, fussMittel, fussKlein];
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



    }







}
