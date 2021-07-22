import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  onProduitChercherUpdate = new Subject<string>();
  produitChercher = "";
 updateNomProduit(nomProduit:string){
  this.produitChercher= nomProduit
  this.onProduitChercherUpdate.next(this.produitChercher)
    console.log(nomProduit);
    
  }
  constructor() { }
}
