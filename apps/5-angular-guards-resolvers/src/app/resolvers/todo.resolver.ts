import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ITodo } from "../interfaces";
import { TodoService } from "../services/todo.service";

@Injectable({ providedIn: 'root' })
export class TodoResolver implements Resolve<Observable<ITodo>> {
  public constructor(
    private _todoService: TodoService
    ){
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<ITodo> {
    return this._todoService.get$(parseInt(route.params['id']));
  }
}
