// TODO : écrire la fonction calculer()
function calculer(nb1, x,nb2) {
    switch(x) {
        case "+":
            return (nb1 + nb2);
            break;
        case "-":
            return (nb1 - nb2);
            break;
        case "*":
            return (nb1 * nb2);
            break;
        case "/":
            return (nb1 / nb2);
            break;
        default:
            console.log("Ceci n'est pas une opération mathématique")
            }
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity