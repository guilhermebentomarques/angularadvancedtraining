import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITodo } from "../interfaces";

@Component({
  selector: 'advanced-angular-course-todos',
  template: `
    <a style="display: block" *ngFor="let todo of todos" [routerLink]="todo.id.toString()">
      {{ todo.title }}
    </a>
    <router-outlet></router-outlet>
  `
})
export class TodosComponent implements OnInit {

  public todos: ITodo[] = [];

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.todos = this._activatedRoute.snapshot.data['todos'];
  }
}
