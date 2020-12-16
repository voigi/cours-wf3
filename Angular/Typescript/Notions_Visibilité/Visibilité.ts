class Personne {
    public nom: string;
    private prenom: string;
    protected dateCreationPersonne: Date;

    constructor(nomComplet: string) {
        let split = nomComplet.split(" ");
        this.prenom = split[0];
        this.nom = split[1];

        //Autorisé en interne
        this.dateCreationPersonne = new Date();

        this.direBonjour(); //autorisé en interne
    }

    private direBonjour() {
        console.log("Bonjour");
    }
}

let p1 = new Personne("Alfred Dupont");
p1.nom; //autorisé 
p1.prenom; //interdit
p1.dateCreationPersonne; //interdit

class Etudiant extends Personne {
    constructor(nomComplet: string) {
        super(nomComplet);

        //Interdit car prénom & direBonjour privés
        console.log(this.prenom);
        this.direBonjour();

        //Autorisé car protected
        console.log(this.dateCreationPersonne);

    }
}