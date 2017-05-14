var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
if (nb1 > nb2){
    console.log(nb1 + " est plus grand que " + nb2)
}
else {
    if (nb1 < nb2){
        console.log(nb1 + " est plus petit ou égal à " + nb2)
    } else {
        console.log(nb1 + " et " + nb2 + " sont égaux")
    }
}