class Product {
    public nom: string;
    public _description: string;
    private _prix: number;
    private static devise: string;

    constructor(nom: string, description: string, prix: number) {
        this.nom = nom;
        this._description = description;
        this._prix = prix;
        
        if (!Product.devise) Product.devise = " €";
    }

    get prix() {
        return this._prix + Product.devise;
    }
}

let p3 =  new Produit("Clavier", "Clavier AZERTY", 15);

console.log(p3.prix);