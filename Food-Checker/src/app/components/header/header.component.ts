import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() envoyerRecherche = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // updateRecherche(event: string) {
  //   this.envoyerRecherche.emit(event); // <- event = le nom du produit
  // }
}
