// suppression d'un lac

supprimerLac(lacASupprimer : Lac) {
    let indice = this.listeLacs.findIndex(lac => lac.nom === lacASupprimer.nom);
    if (indice != -1) {
      this.listeLacs.splice(indice, 1);
    }
  }