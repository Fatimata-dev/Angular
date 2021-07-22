import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// On indique à angular que notre service est injectable dans toutes l'application
@Injectable({
    providedIn: 'root'
})
export class NumberService {
    compteur = 0;
    //le subject permet de notifier tous lesnabonnés d'un changement de valeur
    onCompteurUpdate = new Subject<number>();

    incrementer(){
        this.compteur++;
        this.onCompteurUpdate.next(this.compteur); 
    }
}