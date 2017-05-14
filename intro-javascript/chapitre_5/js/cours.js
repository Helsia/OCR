/*function direBonjour() {
    console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

function direBonjour() {
    return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjour();
console.log(resultat);
console.log("Fin de programme");

function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));*/

function presentation(prenom, age) {
    console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans.");
}

presentation("Garance", 7); // OK
presentation(3, "Prosper"); // Erreur: inversion !