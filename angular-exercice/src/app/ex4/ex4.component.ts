import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
  todos:{text:string, color:string, size:string}[] = [] 
  addTask(event:any){
    event.preventDefault()
    const task = {'text': event.target.todoList.value, 'color': event.target.couleur.value, 'size': event.target.taille.value, }
    this.todos.push(task)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
