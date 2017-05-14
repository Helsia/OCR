// TODO : ajoutez ici la définition des objets nécessaires
var Compte = {
    // Initialise le compte
    initCompte: function (nom, solde) {
        this.nom = nom;
        this.solde = solde;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.nom + ", solde : " + this.solde + " euros";
        return description;
    },
    // Débiter un compte
    debiter: function (montant) {
        this.solde -= montant;
        return this.solde;
    },
    // Créditer un compte
    crediter: function (montant) {
        this.solde += montant;
        return this.solde;
    },
    // Ajoute les intérêts
    ajouterInterets: function () {
        this.solde += this.solde * this.interet;
    },
};
//Objet Compte Bancaire
var CompteBancaire = Object.create(Compte);
// Initialise le compte bancaire
CompteBancaire.initCB = function (nom, solde) {
    this.initCompte(nom, solde);
};

//Objet Compte Epargne
var CompteEpargne = Object.create(Compte);
// Initialise le compte épargne
CompteEpargne.initCE = function (nom, solde, interet) {
    this.initCompte(nom, solde);
    this.interet = interet;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'était inital des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transferts et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
