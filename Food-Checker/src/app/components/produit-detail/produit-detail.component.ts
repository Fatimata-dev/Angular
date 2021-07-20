import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/items';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produits = ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
