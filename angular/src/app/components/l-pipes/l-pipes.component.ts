import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l-pipes',
  templateUrl: './l-pipes.component.html',
  styleUrls: ['./l-pipes.component.css']
})
export class LPipesComponent implements OnInit {
  langue = 'fr'
  dateDuJour = new Date();
  message = "lorem"
  constructor() { }

  ngOnInit(): void {
  }
changerLangue(langue: string){
  this.langue = langue;
}
}
