import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrls: ['./read-todo.component.css'],
})
export class ReadTodoComponent implements OnInit {
  AllTodo: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAllTodo().subscribe((data) => {
      this.AllTodo = data;
      console.log(`Show all todos: ${data[0].title}`);
    });
  }
}
