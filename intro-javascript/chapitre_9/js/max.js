var valeurs = [11, 3, 7, 2, 9, 10];

var max = valeurs[1];

for (var i = 0; i < valeurs.length; i++) {
    if (max < valeurs[i]) {
        max = valeurs[i];
    };
};

console.log("Le maximum des éléments vaut " + max);
