import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css'],
})
export class DeleteTodoComponent implements OnInit {
  public id: number | null = null;
  public todo: Todo = {} as Todo;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param: ParamMap) => {
        this.id = JSON.parse(param.get('id')!);
      },
    });
    if (this.id) {
      this.todoService.readById(this.id).subscribe({
        next: (data) => {
          this.todo = data;
        },
        error: (error) => {
          this.errorMessage = error;
        },
      });
    }
  }

  public deleteSubmit() {
    if (this.id) {
      this.todoService.deleteTodo(JSON.stringify(this.id)).subscribe({
        next: () => {
          this.router.navigate(['/todos']);
        },
        error: (error) => {
          this.errorMessage = error;
          this.router.navigate(['/todos']);
        },
      });
    }
  }
}
