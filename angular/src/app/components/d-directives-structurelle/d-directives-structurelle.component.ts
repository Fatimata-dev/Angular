import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-directives-structurelle',
  templateUrl: './d-directives-structurelle.component.html',
  // styleUrls: ['./d-directives-structurelle.component.css']
})
export class DDirectivesStructurelleComponent implements OnInit {
  isActive = true;
  prenoms =  ['Fatimata','Bilal','Aicha','Maryam'];
  prenom= "Yohann"
  constructor() { console.log("constructor");
   }

  ngOnInit(): void {
    console.log(("Initialisation du composant"));
    
  }

}
