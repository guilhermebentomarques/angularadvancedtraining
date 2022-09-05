import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { IItem } from '../item.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public getData(): Observable<IItem> {
    return timer( this._getRandom(500, 1000), 1000).pipe(
      map(() => ({id: this._getRandom(1, 99)}))
    );
  }

  private _getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
