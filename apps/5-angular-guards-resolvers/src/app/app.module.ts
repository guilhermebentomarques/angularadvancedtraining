import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo.component';
import { TodosComponent } from './components/todos.component';
import { TodoResolver } from './resolvers/todo.resolver';
import { TodosResolver } from './resolvers/todos.resolver';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([
    {
      path: 'todos',
      resolve: { todos: TodosResolver },
      component: TodosComponent,
      children: [
        {
          path: ':id',
          component: TodoComponent,
          resolve: { todo: TodoResolver }
        }
      ]
    }
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
