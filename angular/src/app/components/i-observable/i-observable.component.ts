import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Observable, of , interval, Subscription} from 'rxjs';
import {Utilisateur} from '../../class/utilisateur.component'
@Component({
  selector: 'app-i-observable',
  templateUrl: './i-observable.component.html',
  styleUrls: ['./i-observable.component.css']
})
export class IObservableComponent implements OnInit {
  utilisateurs:Utilisateur[]=[]
  nombres:number[]=[]
  tempConnexion!:Subscription
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.getNombre().subscribe(
      (resultatObs:number[])=> this.nombres = resultatObs,
      (error) => {console.error((error));
      },
      ()=> {console.log();
      }
    );
    this.tempConnexion = interval(1000).subscribe(
      (valeur)=> console.log('Temps de connexion: ' + valeur)
      
    )
  }
  ngOnDestroy(){
    this.tempConnexion.unsubscribe()
  }
  getNombre(){
    const nombresObs = of([1,5,8,6,4]);
    return nombresObs
  }
  getNombreMans(){
    const prenoms = ['Aicha','Maryam'];
    const prenomsObs = new Observable(
      (observer) => observer.next(prenoms)
    )
    return prenomsObs
  }
  getUtilisateurs(){
    this.http.get<Utilisateur[]>('https://jsonplaceholder.typicode.com/users').subscribe(
    (reponse) => this.utilisateurs = reponse
    
    )
  }
}
