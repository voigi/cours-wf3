class Produit {
    constructor(public nom: string, public description: string, public prix: number) {
        console.log("je construis un produit");
    }
}

let prod1 = new Produit("Clavier", "Clavier AZERTY", 15);

console.log(prod1);

//équivaut à 
class Produi {
    public nom: string;
    public description: string;
    public prix: number;

    constructor(nom: string, description: string, prix: number) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
    }
}