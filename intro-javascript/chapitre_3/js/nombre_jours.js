var mois = Number(prompt("Entrez nombre du mois:"));
switch(mois) {
    case 1, 3, 5, 7, 8, 10, 12:
        console.log("Le mois à 31 jours")
        break;
    case 2:
        console.log("Le mois à 28 jours")
        break;
    case 3, 6, 9, 11:
        console.log("Le mois à 30 jours")
        break;
    default:
        console.log("Ce n'est pas un nombre de mois")
}