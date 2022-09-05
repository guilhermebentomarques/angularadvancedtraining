import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map, Observable } from "rxjs";
import { ITodo } from "../interfaces";
import { TodoService } from "../services/todo.service";

@Injectable({ providedIn: 'root' })
export class TodosResolver implements Resolve<Observable<ITodo[]>> {
  public constructor(private _todoService: TodoService){
  }

  public resolve(): Observable<ITodo[]> {
    return this._todoService.getAll$().pipe(
      map(
        (todos: ITodo[]) => todos.slice(0, 10)
      )
    );
  }
}
