import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-directives-attributs',
  templateUrl: './e-directives-attributs.component.html',
  styleUrls: ['./e-directives-attributs.component.css']
})
export class DDirectivesAttributsComponent implements OnInit {
  couleur= 'coral';
  maClasse = 'txt';

  mesClass= {
    txt: this.couleur == 'coral',
    error: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
