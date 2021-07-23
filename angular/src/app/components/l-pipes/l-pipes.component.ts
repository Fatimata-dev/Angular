import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l-pipes',
  templateUrl: './l-pipes.component.html',
  styleUrls: ['./l-pipes.component.css']
})
export class LPipesComponent implements OnInit {
  dateDuJour = new Date();
  message = "lorem"
  constructor() { }

  ngOnInit(): void {
  }

}
