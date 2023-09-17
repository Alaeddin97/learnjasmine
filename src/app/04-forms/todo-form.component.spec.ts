import {FormBuilder} from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with two controls', () => {
    expect(component.form.contains('name')).toBeTrue;
    expect(component.form.contains('email')).toBeTrue;
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');

    control?.setValue('');

    expect(control?.valid).toBeFalsy();
    });
});