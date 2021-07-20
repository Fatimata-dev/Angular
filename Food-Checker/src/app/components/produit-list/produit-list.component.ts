import { Component, OnInit } from '@angular/core';
import { ITEMS } from 'src/items';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})  
export class ProduitListComponent implements OnInit {
  
  // item = {}
  ITEMS:{id:number, price:number, img:string,name:string}[]=ITEMS
 
  
  constructor() {  }

  ngOnInit(): void {
  }
   

}
