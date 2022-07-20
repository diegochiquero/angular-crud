import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import model
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private serverUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  public getAllTodo(): Observable<Todo[]> {
    let dataUrl: string = `${this.serverUrl}/todos`;
    return this.httpClient.get<Todo[]>(dataUrl).pipe();
  }
}
