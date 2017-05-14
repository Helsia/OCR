var nb1 = Number(prompt("Entrez nb1 :")); // 2
var nb2 = Number(prompt("Entrez nb2 :")); // 4
var nb3 = Number(prompt("Entrez nb3 :")); // 0

if (nb1 > nb2) { // false
    nb1 = nb3 * 2; // non executé
} else { 
    nb1++; // nb1 = 3
    if (nb2 > nb3) { // true
        nb1 = nb1 + nb3 * 3; // nb1 = 3 + 0 = 3
    } else {
        nb1 = 0; // non exécuté
        nb3 = nb3 * 2 + nb2; 
    }
}