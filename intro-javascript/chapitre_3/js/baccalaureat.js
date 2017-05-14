var moy = Number(prompt("Entrez votre moyenne: "));
if ((moy > 20) || (moy < 0)) {
    console.log("La note doit être entre 0 et 20")
} else { if (moy < 10){
            console.log("Recalé")
        } else {
            if (moy >= 12) {
                console.log("Reçu avec Mention")
            } else {
                console.log("Reçu")
            }
        }
    
}