import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    const httpclientspy = jasmine.createSpyObj(HttpClient,['get','post']);
    service = new TodoService(httpclientspy);
    component = new TodosComponent(service);
  });

  it('should set the todos property with the items returned from the todoService', () => {
    let todos = [1,2,3];

    spyOn(service,'getTodos').and.callFake(() => {
      return from([todos]);
    })

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });


  it('should call the server to save the changes when a new todo item is added ', () => {
    let spy = spyOn(service,'add').and.callFake(() => {
      return empty();
    })

    component.add();

    expect(spy).toHaveBeenCalled();
  });


  it('should add the new todo returned from the server ', () => {
    let todo = {id:1};
    let spy = spyOn(service,'add').and.callFake(() => {
      return from([todo]);
    })

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });


  it('should add the error message to message property ', () => {
    let message = 'error message';
    let spy = spyOn(service,'add').and.returnValue(throwError(message));
    ;

    component.add();

    expect(component.message).toBe(message);
  });


  it('should call the delete method from the server when user confirms',  () => {

    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  })


  it('should NOT call the delete method from the server when user confirms',  () => {

    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service,'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  })

  
});

