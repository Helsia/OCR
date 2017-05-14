// Renvoie le carré d'un nombre
function carre(x) {
  // TODO : compléter le code de la fonction
    var res = x * x;
    return res
}

/*console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25*/

for (var i = 1; i <= 10; i++) {
    console.log(carre(i));
}