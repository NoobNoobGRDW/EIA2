/* 
Aufgabe: 9
Name: Kuenz,Linus
Matrikel: 256331
Datum: 14.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe_9 {

    window.addEventListener("load", init);

    function init(): void {
        for (let i = String.fromCharCode(65); i <= String.fromCharCode(90); i++) {
            let buchstabe: HTMLDivElement = document.createElement("div");
            buchstabe.style.width = "2%";
            buchstabe.style.margin = "0.5em";
            buchstabe.style.height = "4%";
            buchstabe.style.backgroundColor = "#BDBDBD";
            buchstabe.innerText = i ;
            buchstabe.addEventListener("click", handleMouseClick);
            document.body.appendChild(buchstabe);
        }
    }
}