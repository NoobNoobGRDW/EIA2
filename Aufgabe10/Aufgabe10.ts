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
        name: "Weiﬂtanne",
        price: 30,
    };
    let gruentanne: Products = {
        name: "Gr¸ntanne",
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
        name: "Weiﬂe Kugeln",
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
        name: "Weiﬂe Kerzen",
        price: 1,
    };
    let kerzeBlau: Products = {
        name: "Blaue Kerzen",
        price: 3,
    };


    function init(_event: Event): void {
        let tree: Products[] = [fichte, weisstanne, gruentanne, nordmann];
         for (let i: number=0; i<tree.length;i++) {
            let baumFieldS: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("baum");
            
            let radioButton: HTMLInputElement= <HTMLInputElement>document.createElement("input");
            radioButton.type="radio";
            radioButton.name="Radiogroup";
            radioButton.value= tree[i].name;
            radioButton.id=tree[i].name;
            
            let label: HTMLLabelElement= <HTMLLabelElement>document.createElement("label");
            label.htmlFor = tree[i].name;
            label.innerText=" " + tree[i].name+ " " + tree[i].price + "Ä";
            
            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
            }
    }







}
