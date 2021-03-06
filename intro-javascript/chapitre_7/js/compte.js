var compte = {
    titulaire: "Alex",
    solde: 0,
    credit: nbrCredit,
    debit: nbrDebit,

    // Ajoute le montant passé en paramètre au solde du compte
    crediter: function () {
        return this.solde + this.credit;
    },
    
    // Retire le montant passé au paramètre du solde du compte
    debiter: function () {
        return this.solde - this.debit;
    },
    
    // Renvoie la description du compte
    decrire: function () {
        var Description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return Description;
    }
};

console.log(compte.decrire());

var nbrCredit = Number(prompt("Entrez le montant à créditer :"));
compte.solde = compte.solde + 200;

var nbrDebit = Number(prompt("Entrez le montant à débiter :"));
compte.solde = compte.solde - 150;

console.log(compte.decrire());

/*
Exercice : compte bancaire


var compte = {
    titulaire: "Alex",
    solde: 0,

    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());
*/
