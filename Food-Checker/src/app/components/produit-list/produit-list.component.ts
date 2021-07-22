import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../../../assets/items';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  @Input() produitChercher!: string;
  produits = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.produits = ITEMS.filter(
      (produit)=> {
        const nomProduit = this.produitChercher.toLowerCase()
        return produit.name.toLowerCase().includes(nomProduit)
      }
    )
  }
}
