import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
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

  public updateSubmit() {
    if (this.id) {
      this.todoService
        .updateTodo(this.todo, JSON.stringify(this.id))
        .subscribe({
          next: (data: Todo) => {
            console.log(data);
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
