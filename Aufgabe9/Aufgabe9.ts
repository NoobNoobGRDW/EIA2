/* 
Aufgabe: 9
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe_9 {

    window.addEventListener("load", init);
    document.addEventListener("keydown", handleKeyDown);
    var buchStaben: string;
    let zielBuchstabe: string;

    function init(): void {


        for (let i = 65; i <= 90; i++) {
            buchstabenReihe(String.fromCharCode(i));
        }

        createPaper();
    }


    function buchstabenReihe(buchStaben: string): void {

        let div: HTMLDivElement = document.createElement("div");

        div.innerText = buchStaben;
        div.style.backgroundColor = "white";
        div.style.fontSize = "30px";
        div.style.width = "25px";
        div.style.height = "1px";
        div.style.margin = "9px";
        div.style.marginTop = "0px";
        div.style.marginBottom = "35px";
        div.style.display = "inline";
        div.style.textAlign = "center";
        div.id = buchStaben;
        div.className = "letter";

        div.addEventListener("click", mausClick);
        document.body.appendChild(div);
    }


    function createPaper(): void {

        let papier: HTMLDivElement = document.createElement("div");

        papier.style.backgroundColor = "#d9d9d9";
        papier.style.width = "96%";
        papier.style.height = "800px";
        papier.style.margin = "2%";


        papier.addEventListener("click", platzieren);

        document.body.appendChild(papier);
    }


    function mausClick(_event: MouseEvent): void {

        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.color = "lightgrey";

        zielBuchstabe = click.id;

        let divs: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letter");

        for (let i: number = 0; i < divs.length; i++) {
            if (zielBuchstabe != divs[i].id) {
                divs[i].style.color = "black";
            }
        }
    }


    function handleKeyDown(_event: KeyboardEvent): void {

        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20) {
            zielBuchstabe = String.fromCharCode(_event.keyCode);
        }
    }


    function platzieren(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");

        box.innerText = zielBuchstabe;
        box.style.color = "hsl(" + Math.random() * 360 + ", 60%, 50%)";
        box.style.fontSize = "40px";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";

        box.addEventListener("click", platzieren);
        box.addEventListener("click", (event) => { loeschen(event, event.altKey) });
        document.body.appendChild(box);

        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }

    function loeschen(mouse: MouseEvent, alt: boolean): void {

        if (alt == true) {

            let char: HTMLDivElement = <HTMLDivElement>mouse.target;
            document.body.removeChild(char);
        }
    }


}