import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import Components
import { HomeComponent } from './components/home/home.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo/home', pathMatch: 'full' },
  { path: 'todo/home', component: HomeComponent },
  { path: 'todo/create', component: CreateTodoComponent },
  { path: 'todo/edit', component: EditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
