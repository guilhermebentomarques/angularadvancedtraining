import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITodo } from "../interfaces";

@Component({
  selector: 'advanced-angular-course-todo',
  template: `
    <h3>
    {{ todo?.id }} {{ todo?.title }}
    </h3>
    <p *ngIf="todo?.completed">Completed</p>
  `
})
export class TodoComponent implements OnInit {

  public todo: ITodo | undefined;

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data) => {
      this.todo = data['todo'];
    });
  }
}
