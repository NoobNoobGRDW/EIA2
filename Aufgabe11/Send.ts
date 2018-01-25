/*
Aufgabe: 11
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace SendData {

    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        setupColorDivs();
    }

    function setupColorDivs(): void {
        console.log("Hallo");
        let colors: string[] = ["red", "green", "blue"];
        let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        console.log(divs);
        for (let i: number = 0; i < divs.length; i++) {
            console.log(i);
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }

    function handleClickOnDiv(_event: Event): void {
        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }

    function sendRequest(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?color=" + _color, true);
        xhr.open("GET", "https://eia2-.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
}