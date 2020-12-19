let prenom; //On a une variable prénom

//prenom a-t-il une valeur ? Si oui on la prend, sinon on prend une valeur par défaut
let prenomCopie = prenom ?? "prénom par défaut";

//équivaut à
if (prenom) {
    prenomCopie = prenom;
} else {
    prenomCopie =  "prénom par défaut";
}