function perimetre(r) {
    return 2 * Math.PI * r
}

function aire(r) {
    return Math.PI * r * r
}

var r = Number(prompt("Entrez le rayon du cercle en cm:"));
console.log("Le périmètre du cercle est de " + perimetre(r) + "cm.");
console.log("L'aire du cercle est de " + aire(r) + " cm2.")

/*
Exercice : périmètre et aire d'un cercle


// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
    return 2 * rayon * Math.PI;
}

// Renvoie l'aire d'un cercle
function aire(rayon) {
    return Math.pow(rayon, 2) * Math.PI;
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));*/
