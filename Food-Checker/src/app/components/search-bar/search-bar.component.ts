import { Component, OnInit } from '@angular/core';
import {NavigationService} from 'src/app/services/navigation.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  nomProduit!: string;
  constructor(private navigation:NavigationService) { }
  envoyerRecherche(event:any){
    const valeur = event.target.search.value
  event.preventDefault();
  this.navigation.updateNomProduit(valeur)
}
  ngOnInit(): void {
  }

}
