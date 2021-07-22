import { Component, OnInit } from '@angular/core';
import {NumberService} from 'src/app/services/number.service'

@Component({
  selector: 'app-j-service',
  templateUrl: './j-service.component.html',
  styleUrls: ['./j-service.component.css']
})
export class JServiceComponent implements OnInit {
  compteur:Number
  constructor(private numberService: NumberService) {
   this.compteur = this.numberService.compteur
    
   }

  ngOnInit(): void {
    this.numberService.onCompteurUpdate.subscribe(
      (nouvelleValeur) =>this.compteur = nouvelleValeur
    )
  }
  onClickHandler(){
    this.numberService.incrementer();
  }

}
