var Film = {
    // initialise le film
    init: function (titre, annee, real) {
        this.titre = titre;
        this.annee = annee;
        this.real = real;
    },
    // Renvoie la description d'un film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ", " + this.real + ")";
        return description;
    },
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philppe Lacheau et Nicolat Benamou");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
