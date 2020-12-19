//Requete get effectué coté Front vers le back

ngOnInit(): void {
    this.http.get("http://localhost:3000/lacs").subscribe((resultatServeur:any) => {

      for (let unLac of resultatServeur) {
        this.listeLacs.push(
          new Lac(unLac.nom, unLac.superficie,
                  unLac.typeLac, unLac.pecheAutorisee,
                  unLac.navigationAutorisee, unLac.entreePayante)
        );
      }
    });
  }