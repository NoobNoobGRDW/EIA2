/*
Aufgabe: 11
Name: Kuenz,Linus
Matrikel: 256331
Datum: 21.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
    }
    function handleClickOnDiv(_event) {
        let style = _event.target.style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }
    function sendRequest(_color) {
        let xhr = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?color=" + _color, true);
        xhr.open("GET", "https://eia2-.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
})(SendData || (SendData = {}));
