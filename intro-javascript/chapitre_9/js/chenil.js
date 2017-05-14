var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    // Renvoie la description du chien
    decrire: function () {
        var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm.";
        return description;
    },
};

var chien1 = Object.create(Chien);
var chien2 = Object.create(Chien);
var chien3 = Object.create(Chien);

chien1.init("Crokdur", "mâtin de Naples", 75);
chien2.init("Pupuce", "bichon", 22);
chien3.init("Médor", "labrador", 58);

var chiens = [chien1, chien2, chien3];

console.log("Le chenil héberge " + chiens.length + " chien(s) :");

chiens.forEach(function (chien) {
    console.log(chien.decrire());
    console.log("Il aboie : " + chien.aboyer());
});

/*
CORRECTION
var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");
chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});
*/