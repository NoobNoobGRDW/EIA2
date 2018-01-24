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

    //var basketBaumart: string[] = [bA[0][0], "" + bA[0][1]];
    var basketBaumart: string[]= ["keine Baumart ausgewählt", "0"];
    var basketHalter: string[] = ["keiner ausgewählt", "0"];
    var basketBeleuchtung: string[] = [b[0][0], "" + b[0][1]];
    var basketSchmuck: string[][] = [];
    var basketLieferopt: string[] = ["keine Lieferoption ausgewählt", "0"];

    function createElements(): void {
       
        
        
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baum");
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "tree") {
                // Radiobutton
                var radioB3: HTMLInputElement = document.createElement("input");
                radioB3.type = "radio";
                radioB3.name = "radioGroupBaumart";
                radioB3.value = "radio3." + i;
                radioB3.id = "radio3." + i;
                baumart.appendChild(radioB3);

                // Text/Label
                var label4 = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radioB3.id;
                label4.innerText = article[i].name;
                baumart.appendChild(label4);
                
            }
        }

        //Standfuß:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("fuss");
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "feet") {
                // Radiobutton
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                // Text/Label
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = article[i].name;
                halterung.appendChild(label);
                var br: HTMLElement = document.createElement("br");
                halterung.appendChild(br);
                
                
            }
        }

        //Lieferoptionen:
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferOpt");
        
        //Selectbox erzeugen und Eigenschaften festlegen
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        
        //Auswahlmöglichkeiten erzeugen
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "shipping") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = article[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }

        //Dekoartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuck");
        
        //Liste durch for Schleife erzeugen....für jedes Element:
        for (let i: number = 0; i < article.length; i++) {
            if (article[i].typ == "decoration") {
                
                //....eine Checkbox,...
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxDekoartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                //...den Text zur Auswahlmöglichkeit,...
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
        
        //Submit button zur Überprüfung erstellen
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.style.padding = "0.75em 2em 0.75em 2em";
        submit.style.borderRadius ="0.5em";
        submit.style.border = "none";
        submit.innerText = "Zur Kasse gehen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let stepper2: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let checkBoxes2: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < article.length; i++) {
            
            //Schmuck Warenkorb
            if (article[i].typ == "Deko") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            
            //Baumart Warenkorb
             if (target.id == "radio3."+i || target.id == "stepper2." + i) {
                stepper2[i] = <HTMLInputElement>document.getElementById("stepper2." + i);
                checkBoxes2[i] = <HTMLInputElement>document.getElementById("check" + i);
                basketBaumart[0] = article[i].name;
                basketBaumart[1] =  "" + (article[i].preis * parseInt(stepper2[i].value));
            }
            
            //Halter Warenkorb
            if (target.id == "radio" + i) {
                basketHalter[0] = article[i].name;
                basketHalter[1] = "" + article[i].preis;
            }
            
            //Lieferoptionen Warenkorb
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = article[i].name;
                basketLieferopt[1] = "" + article[i].preis;
            }
            
            //Beleuchtung Warenkorb
            if (target.value == article[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = article[i].name;
                basketBeleuchtung[1] = "" + article[i].preis;
            }
            
            //Schmuck Warenkorb
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [article[i].name, "" + Math.round((article[i].preis * parseInt(stepper[i].value)*100))/100];
            }
           
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#5A9D67";
        korb.style.opacity = "0.95";
        korb.innerHTML = "<span class='wk'>Warenkorb</span> <img src='warenkorb.png' id='warenkorb'><hr>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <br>";
        korb.innerHTML += basketHalter[0] + ": " + basketHalter[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + ": " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + ": " + basketLieferopt[1] + "€ <br>";

        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketBeleuchtung[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgewählt ist, dann......
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);//preis dazurechnen
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <br>";
            }
        }
        
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "€";
        
        let price : HTMLElement = <HTMLElement>document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += Math.round(gesamtpreis * 100) / 100 + "€";
        
    }


    function handleMouseDown(_event: MouseEvent): void {
        let feedback: HTMLDivElement = document.createElement("div");
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || vorname.checkValidity() == false || name.checkValidity() == false || vorname.checkValidity() == false || strasseNr.checkValidity() == false || plzOrt.checkValidity() == false || land.checkValidity() == false) {
            feedback.innerText = "Du hast deine Daten nicht richtig angegeben. Bitte überprüfe sie nocheinmal.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Deine Daten wurden korrekt angegeben, vielen Dan für deine Bestellung.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
}