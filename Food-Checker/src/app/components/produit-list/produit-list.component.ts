import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../../assets/items';
import {NavigationService}  from 'src/app/services/navigation.service'
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produitChercherAbonnement!: Subscription 
  nomProduit!: '';
  produits = ITEMS;

  constructor(private navigation:NavigationService) {
    
   }

  ngOnInit(): void {
    this.produitChercherAbonnement = this.navigation.onProduitChercherUpdate.subscribe(
      (produitRechercher) => this.filtrerProduits(produitRechercher)
    );
  }
  filtrerProduits(produitRechercher:string) {
    const nomProduitMini = produitRechercher.toLowerCase();
    this.produits = ITEMS.filter(produit => {
      return produit.name.toLowerCase().includes(nomProduitMini)
    })
  }
  ngOnDestroy(){
    this.produitChercherAbonnement.unsubscribe()
  }
}
