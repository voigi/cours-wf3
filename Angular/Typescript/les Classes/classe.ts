class Personn {
    prenom: string;
    nom: string;

    constructor(nomComplet: string) {
        let split = nomComplet.split(" ");
        this.prenom = split[0];
        this.nom = split[1];
    }
}

let p = new Personn("Alfred Dupont");

console.log(p);