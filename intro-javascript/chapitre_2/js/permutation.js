var nombre1 = 5;
var nombre2 = 3;

var nbr3 = nombre1; // case = 5 nombre1 = 5 nombre2 = 3
nombre1 = nombre2; // case = 5 nombre1 = 3 nombre2 = 3
nombre2 = nbr3; // case = 5 nombre1 = 3 nombre2 = 5

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5