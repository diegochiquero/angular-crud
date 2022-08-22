import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  public todo: Todo = {} as Todo;
  public errorMessage: string | null = null;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}
  public createSubmit() {
    this.todoService.createTodo(this.todo).subscribe({
      next: (data: Todo) => {
        console.log(data);
        this.router.navigate(['/todos']);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
