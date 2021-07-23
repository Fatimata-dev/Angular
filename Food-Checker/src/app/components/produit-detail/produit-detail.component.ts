import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
id!:number
  constructor(
    private route: ActivatedRoute
  )
  
   { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (produit:Params) => this.id = produit.id
    )
  }

}
