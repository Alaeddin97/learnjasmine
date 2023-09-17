
import { Injectable } from '@angular/core';
import { TodoService } from './todo.service'
@Injectable({
  providedIn:'root'
})
export class TodosComponent { 
  todos:any[] = [];
  message: any; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t)
  }

  add() { 
    var newTodo = { title: '... ' };

    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      error => this.message = error);
  }

  delete(id: any) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
