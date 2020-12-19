setTimeout(() => {
    console.log("test");
    
}, 2000);

//Ajout d'un lac au bout de 2 secondes : 
setTimeout(() => {
    this.listeLacs.push(new Lac("La deule", "134Ha", "Lac naturel", true, false, false));
  }, 2000); 