
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo: any) {
    return this.http.post('...', todo).pipe(
      map(r => r)
    )
  }

  getTodos() {
    return this.http.get('...').pipe(
      map(r => r)
    )
  }

  delete(id: any) {
    return this.http.delete('...').pipe(
      map(r => r)
    )
  }
}