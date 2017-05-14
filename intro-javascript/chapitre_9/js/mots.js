var mots = [];

var i = 1;
var ok = true

while (ok === true) {
    mots[i] = prompt("Entrez un mot ou stop pour arreter: ");
    if (mots[i] === "stop") {
        ok = false;
    } else {
        ok = true;
    };
    i++;
};

for (var i = 0; i < mots.length - 1; i++) {
    console.log(mots[i]);
};
