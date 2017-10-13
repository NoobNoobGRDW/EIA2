/**
 * Created by Linus on 13.10.2017.
 */
function dialogFeld() {
    var eingabe = prompt("Bitte geben Sie einen Namen ein.", "");
    if (eingabe != null) {
        document.getElementById("FELD").innerHTML =
            "Hallo " + eingabe + "! Dies ist eine persoenliche Begruessung...";
    }
}
