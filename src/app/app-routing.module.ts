import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import Components
import { HomeComponent } from './views/home/home.component';
import { TodoCrudComponent} from './views/todo-crud/todo-crud.component';
import { ReadTodoComponent } from './components/todo/read-todo/read-todo.component';
import { CreateTodoComponent } from './components/todo/create-todo/create-todo.component';
import { UpdateTodoComponent } from './components/todo/update-todo/update-todo.component';
import { DeleteTodoComponent } from './components/todo/delete-todo/delete-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo/home', pathMatch: 'full' },
  { path: 'todo/home', component: HomeComponent },
  { path: 'todos', component: TodoCrudComponent},
  { path: 'todo/read', component: ReadTodoComponent },
  { path: 'todo/create', component: CreateTodoComponent },
  { path: 'todo/update/:id', component: UpdateTodoComponent },
  { path: 'todo/delete/:id', component: DeleteTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
