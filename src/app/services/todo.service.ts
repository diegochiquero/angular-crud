import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError, map } from 'rxjs';

//import model
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private serverUrl: string = 'http://localhost:9000';

  constructor(private httpClient: HttpClient) {}

  public getAllTodo(): Observable<Todo[]> {
    let dataUrl: string = `${this.serverUrl}/todos`;
    return this.httpClient
      .get<Todo[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  public createTodo(todo: Todo): Observable<Todo> {
    let dataUrl: string = `${this.serverUrl}/todos`;
    return this.httpClient
      .post<Todo>(dataUrl, todo)
      .pipe(catchError(this.handleError));
  }

  public readById(id: number): Observable<Todo> {
    let dataUrl: string = `${this.serverUrl}/todos/${id}`;
    return this.httpClient.get<Todo>(dataUrl).pipe(
      map((obj) => obj),
      catchError(this.handleError)
    );
  }
  public updateTodo(todo: Todo, id: string): Observable<Todo> {
    let dataUrl: string = `${this.serverUrl}/todos/${id}`;
    return this.httpClient
      .put<Todo>(dataUrl, todo)
      .pipe(catchError(this.handleError));
  }

  public deleteTodo(id: string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/todos/${id}`;
    return this.httpClient
      .delete<{}>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //Client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //Server error
      errorMessage = `Status : ${error.status} \n Message ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
