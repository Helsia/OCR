var nbr = Number(prompt("Entrez le nombre inital:"))

for (var i = nbr; i <= nbr + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else { 
        console.log(i + " est impair")}
}