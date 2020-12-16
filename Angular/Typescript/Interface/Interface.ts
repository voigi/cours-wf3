interface Deplacable {
    seDeplacer()
}

class Loup implements Deplacable {
    seDeplacer() {
        console.log("je me déplace dans la foret");
    }
}

class Velo implements Deplacable {
    seDeplacer() {
        
    }
}

function deplacerObjet(o: Deplacable) {
    o.seDeplacer();
}

deplacerObjet(new Velo());
deplacerObjet(new Loup());