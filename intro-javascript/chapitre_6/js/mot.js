// Renvoie le nombre de voyelles d'un mot
function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === "a") || (lettre === "e") || (lettre === "y") || (lettre === "u") || (lettre === "i") || (lettre === "o")) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

// Renvoie un mot écrit à l'envers
function inverser(mot) {
    var motInverse = "";
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }
    return motInverse;
}

// Renvoie un mot converti en "leet speak"
function convertirEnLeetSpeak(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

function trouverLettreLeet(lettre) {
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
        case "a":
            lettreLeet = "4";
            break;
        case "b":
            lettreLeet = "8";
            break;
        case "e":
            lettreLeet = "3";
            break;
        case "l":
            lettreLeet = "1";
            break;
        case "o":
            lettreLeet = "0";
            break;
        case "s":
            lettreLeet = "5";
            break;
    }
    return lettreLeet;
}

// Début du programme
var motSaisi = prompt("Entrez un mot:");

console.log("Le mot " + motSaisi + " contient " + motSaisi.length + " caractère(s).");
console.log("Il s'écrit en minuscules: " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules: " + motSaisi.toUpperCase());

nbVoyelles = compterNbVoyelles(motSaisi);

console.log("Il contient " + nbVoyelles + " voyelle(s) et " +
    (motSaisi.length - nbVoyelles) + " consonne(s)");

motInverse = inverser(motSaisi);

console.log("Il s'écrit à l'envers: " + motInverse);

// Vérificatin si le mot est un palindrome

if (motInverse.toLowerCase() === motSaisi.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}

motEnLeetSpeak = convertirEnLeetSpeak(motSaisi);

console.log("Il s'écrit en leet speak: " + motEnLeetSpeak);
