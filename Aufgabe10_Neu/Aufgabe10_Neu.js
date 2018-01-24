/*
Aufgabe: 10
Name: Kuenz,Linus
Matrikel: 256331
Datum: 03.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10_Neu;
(function (Aufgabe10_Neu) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var strasse;
    var hausnummer;
    var ort;
    var plz;
    var mail;
    var zusatz;
    var label;
    //var basketBaumart: string[] = [bA[0][0], "" + bA[0][1]];
    var basketBaumart = ["keine Baumart ausgew�hlt", "0"];
    var basketHalter = ["keiner ausgew�hlt", "0"];
    var basketBeleuchtung = [Aufgabe10_Neu.b[0][0], "" + Aufgabe10_Neu.b[0][1]];
    var basketSchmuck = [];
    var basketLieferopt = ["keine Lieferoption ausgew�hlt", "0"];
    function createElements() {
        let baumart = document.getElementById("baum");
        for (let i = 0; i < Aufgabe10_Neu.article.length; i++) {
            if (Aufgabe10_Neu.article[i].art == "tree") {
                //radiobutton erzeugen
                var radioB3 = document.createElement("input");
                radioB3.type = "radio";
                radioB3.name = "radioGroupBaumart";
                radioB3.value = "radio3." + i;
                radioB3.id = "radio3." + i;
                baumart.appendChild(radioB3);
                //Text Auswahlm�glichkeit
                var label4 = document.createElement("label");
                label4.id = "label" + i;
                label4.htmlFor = radioB3.id;
                label4.innerText = Aufgabe10_Neu.article[i].name;
                baumart.appendChild(label4);
            }
        }
        //Halterung:
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe10_Neu.article.length; i++) {
            if (Aufgabe10_Neu.article[i].art == "Halter") {
                //Radiobutton erzeugen
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                //Text auswahlm�glichkeiten erzeugen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe10_Neu.article[i].name;
                halterung.appendChild(label);
                var br = document.createElement("br");
                halterung.appendChild(br);
            }
        }
        //Beleuchtung:
        let beleuchtung = document.getElementById("beleuchtung");
        //Selectbox erzeugen und Eigenschaften festlegen
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        //Auswahlm�glichkeiten erzeugen
        for (let i = 0; i < Aufgabe10_Neu.article.length; i++) {
            if (Aufgabe10_Neu.article[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe10_Neu.article[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Dekoartikel:
        let schmuckartikel = document.getElementById("schmuckartikel");
        //Liste durch for Schleife erzeugen....f�r jedes Element:
        for (let i = 0; i < Aufgabe10_Neu.article.length; i++) {
            if (Aufgabe10_Neu.article[i].art == "Deko") {
                //....eine Checkbox,...
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxDekoartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                //...den Text zur Auswahlm�glichkeit,...
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe10_Neu.article[i].name;
                schmuckartikel.appendChild(label2);
                //..und den Stepper erzeugen.
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperDekoartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "20";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //Deine Daten:
        let daten = document.getElementById("daten");
        //daten let f�r zugriff auf id in html
        //Daten anh�ngen f�r einzelne eingabefelder
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Vorname, Nachname";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Stra�e";
        strasse.required = true;
        daten.appendChild(strasse);
        hausnummer = document.createElement("input");
        hausnummer.type = "number";
        hausnummer.name = "DatenHausnummer";
        hausnummer.placeholder = "Hausnummer";
        hausnummer.pattern = "[0-9]{3}";
        hausnummer.required = true;
        daten.appendChild(hausnummer);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.required = true;
        daten.appendChild(ort);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        //Lieferoptionen:
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe10_Neu.article.length; i++) {
            if (Aufgabe10_Neu.article[i].art == "Lieferung") {
                //Radiobutton erstellen
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                //Text zur Auswahlm�glichkeit erstellen
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe10_Neu.article[i].name;
                lieferopt.appendChild(label3);
                var br = document.createElement("br");
                lieferopt.appendChild(br);
            }
        }
        //Button:
        //Submit button zur �berpr�fung erstellen
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.style.padding = "0.75em 2em 0.75em 2em";
        submit.style.borderRadius = "0.5em";
        submit.style.border = "none";
        submit.innerText = "Zur Kasse gehen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let stepper2 = [];
        let checkBoxes = [];
        let checkBoxes2 = [];
        let gesamtpreis = 0;
        for (let i = 0; i < Aufgabe10_Neu.article.length; i++) {
            //Schmuck Warenkorb
            if (Aufgabe10_Neu.article[i].art == "Deko") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            //Baumart Warenkorb
            if (target.id == "radio3." + i || target.id == "stepper2." + i) {
                stepper2[i] = document.getElementById("stepper2." + i);
                checkBoxes2[i] = document.getElementById("check" + i);
                basketBaumart[0] = Aufgabe10_Neu.article[i].name;
                basketBaumart[1] = "" + (Aufgabe10_Neu.article[i].preis * parseInt(stepper2[i].value));
            }
            //Halter Warenkorb
            if (target.id == "radio" + i) {
                basketHalter[0] = Aufgabe10_Neu.article[i].name;
                basketHalter[1] = "" + Aufgabe10_Neu.article[i].preis;
            }
            //Lieferoptionen Warenkorb
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = Aufgabe10_Neu.article[i].name;
                basketLieferopt[1] = "" + Aufgabe10_Neu.article[i].preis;
            }
            //Beleuchtung Warenkorb
            if (target.value == Aufgabe10_Neu.article[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = Aufgabe10_Neu.article[i].name;
                basketBeleuchtung[1] = "" + Aufgabe10_Neu.article[i].preis;
            }
            //Schmuck Warenkorb
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [Aufgabe10_Neu.article[i].name, "" + Math.round((Aufgabe10_Neu.article[i].preis * parseInt(stepper[i].value) * 100)) / 100];
            }
        }
        let korb = document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#5A9D67";
        korb.style.opacity = "0.95";
        korb.innerHTML = "<span class='wk'>Warenkorb</span> <img src='warenkorb.png' id='warenkorb'><hr>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "� <br>";
        korb.innerHTML += basketHalter[0] + ": " + basketHalter[1] + "� <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + ": " + basketBeleuchtung[1] + "� <br>";
        korb.innerHTML += " " + basketLieferopt[0] + ": " + basketLieferopt[1] + "� <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketBeleuchtung[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i = 0; i < stepper.length; i++) {
            //Wenn anzahl nicht gleich 0 und die checkbox ausgew�hlt ist, dann......
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]); //preis dazurechnen
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "� <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "�";
        let price = document.getElementById("price");
        price.innerHTML = "";
        price.innerHTML += "Gesamtpreis: ";
        price.innerHTML += Math.round(gesamtpreis * 100) / 100 + "�";
    }
    function handleMouseDown(_event) {
        let feedback = document.createElement("div");
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnummer.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Du hast deine Daten nicht richtig angegeben. Bitte �berpr�fe sie nocheinmal.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Deine Daten wurden korrekt angegeben, vielen Dan f�r deine Bestellung.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe10_Neu || (Aufgabe10_Neu = {}));
