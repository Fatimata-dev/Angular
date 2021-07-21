import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.css']
})
export class InoutComponent implements OnInit {
  title:string = 'Inout Components'
  message = "Bonjour le jour !!!!"
  @Input() msg!: string;
   

 
  constructor() { 
  }

  ngOnInit(): void {
  }
  parentUpdate(event:string){
    this.title += event
  }

}
