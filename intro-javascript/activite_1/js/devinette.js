/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

for (var i = 1; i <= 6; i++) {

var nbr = Number(prompt("Entrez un nombre entre 1 et 100:"));
if (nbr < solution) {
    console.log(nbr + " est trop petit")
} else {
    if (nbr > solution) {
        console.log(nbr + " est trop grand")
    } else {
        console.log("Bravo ! La solution était " + solution)
        console.log("Vous avez trouvé en " + i + " essai(s)")
    }
}
    
if (i >= 6) {
    console.log("Perdu... La solution était " + solution)
}
    
}