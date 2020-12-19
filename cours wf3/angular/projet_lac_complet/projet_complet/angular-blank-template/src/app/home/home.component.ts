import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lac } from 'app/models/lac';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listeLacs : Lac[] = [];
  
  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
    this.http.get("http://localhost:3000/lacs").subscribe((resultatServeur:any) => {
      for (let unLac of resultatServeur) {
        this.listeLacs.push(
          new Lac(unLac.id, unLac.titre, unLac.superficie,
                  unLac.typeLac, unLac.pecheAutorisee,
                  unLac.navigationAutorisee, unLac.entreePayante)
        );
      }
    });
  }
  
  supprimerLac(lacASupprimer : Lac) {
    
    this.http.delete("http://localhost:3000/lacs/" + lacASupprimer.id).subscribe(() => {
      let indice = this.listeLacs.findIndex(lac => lac.id === lacASupprimer.id);
  
      if (indice != -1) {
        this.listeLacs.splice(indice, 1);
      }
    });

  }
  
}
