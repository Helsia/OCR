/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Message de bienvenue quand ouverture du fichier
// 1) Lister les contacts: montre tous les contacts (nom et prénom)
// Boucle pour choix utilisateur
// 2) Ajouter un contact: nom puis prénom
// Affiche que le contact est bien ajouté
// Liste des contacts mise à jour
// 3) Quitter le programme

// Creation objet contact
var Contact = {
    // Initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Renvoie la description du contact
    decrire: function () {
        var description = "Nom : " + this.nom + ", Prénom : " + this.prenom;
        return description;
    },
};

// Message de bienvenue
console.log("Bienvenue dans le gestionnaire de contacts !");

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

var repertoire = [];
repertoire.push(contact1);
repertoire.push(contact2);

// Boucle pour les choix de l'utilisateur
var rep = "";
while (rep !== "0") {
    console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
    rep = prompt("Choisissez une option");
    switch (rep) {
        case "0":
            console.log("Vous allez quitter l'application. Au revoir ! ");
            break;
        case "1":
            console.log("Voici la liste des contacts :");
            repertoire.forEach(function (contact) {
                console.log(contact.decrire());
            });
            break;
        case "2":
            console.log("Entrez le nom puis le prénom du contact");
            var nouveauContact = Object.create(Contact);
            var nouveauNom = prompt("Entrez le nom du contact :");
            var nouveauPrenom = prompt("Entrez le prénom du contact :");
            nouveauContact.init(nouveauNom, nouveauPrenom);
            repertoire.push(nouveauContact);
            console.log("Le nouveau contact a bien été ajouté");
            break;
        default:
            console.log("Je n'ai pas compris !");
            rep++;
    }
};
