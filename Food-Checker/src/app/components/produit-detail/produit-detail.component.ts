import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Produit } from 'src/app/classes/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { API_URL_NUTRISCORE } from 'src/app/api/url';
import { PageDetail } from 'src/app/classes/page';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit | undefined
 nutriscoreLink = API_URL_NUTRISCORE 
  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService,
    public location:Location
  )
  
   { this.produit = this.produitService.produitDetail }

   ngOnInit(): void {
    if (!this.produit) {
      this.route.params.subscribe(
        (params: Params) => {
          this.produitService.fetchProduit(params.id)
            .subscribe(
              (page: PageDetail) => this.produit = page.product
            )
        }
      )
    }
  }

}
