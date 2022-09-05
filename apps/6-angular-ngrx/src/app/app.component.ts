import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from './interfaces';
import { DELETE_POST, LOAD_POSTS } from './store/actions';
import { postsSelector } from './store/selectors';

@Component({
  selector: 'advanced-angular-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public posts$: Observable<IPost[]>;

  public constructor(
    private _store: Store
  ) {
    this._store.dispatch(LOAD_POSTS());
    this.posts$ = this._store.select(postsSelector);
  }

  public deletePost(id: string): void {
    this._store.dispatch(DELETE_POST({ id }));
  }
}
