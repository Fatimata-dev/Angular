import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
import {NumberService} from 'src/app/services/number.service'

@Component({
  selector: 'app-j-service',
  templateUrl: './j-service.component.html',
  styleUrls: ['./j-service.component.css']
})
export class JServiceComponent implements OnInit, OnDestroy {
  compteur:Number
  compteurAbonement!:Subscription
  constructor(private numberService: NumberService) {
   this.compteur = this.numberService.compteur
    
   }

  ngOnInit(): void {
   this.compteurAbonement = this.numberService.onCompteurUpdate.subscribe(
      (nouvelleValeur) =>this.compteur = nouvelleValeur
    )
  }
  onClickHandler(){
    this.numberService.incrementer();
  }
  ngOnDestroy(){
  this.compteurAbonement.unsubscribe();
}
}
