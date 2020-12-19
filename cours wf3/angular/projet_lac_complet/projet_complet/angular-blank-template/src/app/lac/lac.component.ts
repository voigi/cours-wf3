import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lac } from 'app/models/lac';

@Component({
  selector: 'app-lac',
  templateUrl: './lac.component.html',
  styleUrls: ['./lac.component.scss']
})
export class LacComponent implements OnInit {

  //Lac à afficher
  @Input() lac : Lac;

  //Evenement déclenché lorsque l'on cliquera sur le bouton "Supprimer"
  @Output() deleteMe : EventEmitter<any>;

  constructor() {
    this.deleteMe = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  onClick() {
    //On émet l'événement "deleteMe" à destination de notre parent
    this.deleteMe.emit();
  }
}
