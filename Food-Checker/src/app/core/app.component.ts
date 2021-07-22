import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produitRecherche= ""
  title = 'food-checker';
  updateRecherche(event:any){
    this.produitRecherche = event;
    
  }
}
