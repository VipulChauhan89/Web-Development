function validate() {
    var card_type = document.getElementById("ctype").value;
    var card_no = document.getElementById("cno").value;
    var val = false;
    
    if (card_type === "Master") {
        var pref = parseInt(card_no.substring(0, 2));
        if (pref >= 51 && pref <= 55 && card_no.length == 16) {
            val = true;
        }
    }
    else if (card_type === "Visa") {
        var pref = parseInt(card_no.substring(0, 1));
        if (pref == 4 && (card_no.length == 13 || card_no.length == 16)) {
            val = true;
        }
    }
    else if (card_type === "AExp") {
        var pref = parseInt(card_no.substring(0, 2));
        if ((pref == 34 || pref == 37) && card_no.length == 15) {
            val = true;
        }
    }
    
    if (val) {
        alert("Your card is valid");
    }
    else {
        alert("Your card is not valid");
    }
}
