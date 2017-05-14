var heure = Number(prompt("Indiquez les heures:"));
var min = Number(prompt("Indiquez les minutes:"));
var sec = Number(prompt("Indiquez les secondes:"));

if ((heure > 23) || (heure < 0) || (min > 59) || (min < 0) || (sec > 59) || (sec < 0)) {
    console.log("Erreurs de saisie")
} else {
    if (sec < 59) {
        sec = sec + 1
    } else {
        sec = 0;
        if (min < 59) {
            min = min + 1
        } else {
            min = 0;
            if (heure < 23) {
                heure = heure + 1
            } else {
                heure = 0
            }
        }
    } 
}

console.log("l'heure sera " + heure + "h" + min + "m" + sec + "s une seconde plus tard")