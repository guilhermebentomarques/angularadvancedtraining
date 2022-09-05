import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DelayedLoadingStrategy implements PreloadingStrategy {
  preload(route: Route, preloadRoute: () => Observable<any>): Observable<any> {
    const delay = route.data?.['delay'] || 0;

    return timer(delay).pipe(switchMap(() => preloadRoute()));
  }
}
