import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from '@angular/common/http';

import { exhaustMap, map } from "rxjs";
import { DELETE_POST, DELETE_POST_SUCCESS, LOAD_POSTS, LOAD_POSTS_SUCCESS } from "./actions";
import { IPost } from "../interfaces";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Effects {

  public loadPosts$ = createEffect(
    () => this._actions.pipe(
      ofType(LOAD_POSTS),
      exhaustMap(
        () => this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').pipe(
          map(
            (posts) =>  LOAD_POSTS_SUCCESS({ posts })
          )
        )
      )
    )
  )

  public deletePost$ = createEffect(
    () => this._actions.pipe(
      ofType(DELETE_POST),
      exhaustMap(
        ({ id }) => this._http.delete<IPost[]>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
          map(
            () =>  DELETE_POST_SUCCESS({ id })
          )
        )
      )
    )
  )

  public constructor(
    private _actions: Actions,
    private _http: HttpClient
  ) {
  }
}
