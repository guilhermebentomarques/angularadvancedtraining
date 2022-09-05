import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodo } from "../interfaces";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TodoService {

  public constructor(private _http: HttpClient) {
  }

  public getAll$(): Observable<ITodo[]> {
    return this._http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  public get$(id: number): Observable<ITodo> {
    return this._http.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
