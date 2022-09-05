import { Component, OnInit } from '@angular/core';
import { OperatorFunction, interval, Observable, Subject, first, take, timer, takeUntil } from 'rxjs';
import { watch } from 'rxjs-watcher';

@Component({
  selector: 'advanced-angular-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private _source$: Observable<number> = interval(1000);

  public ngOnInit(): void {

    // Unsubscribe when first value is emitted
    this._source$.pipe(
      watch('Unsubscribe when first value is emitted') as unknown as OperatorFunction<number, number>,
      first()
      ).subscribe();

    // Unsubscribe when the fifth value is emitted (forbidden to maintain a state outside of the Observable)
    this._source$.pipe(
      watch('Unsubscribe when the fifth value is emitted') as unknown as OperatorFunction<number, number>,
      take(5)
    ).subscribe();

    // Unsubscribe when the Subject is completed (after 3s)
    const subject = new Subject();

    this._source$.pipe(
      watch('Unsubscribe when the subject is completed (after 3s)') as unknown as OperatorFunction<number, number>,
        takeUntil(subject)
     ).subscribe();

     timer(3000).subscribe(() => {
      subject.next(null);
      subject.complete();
     })
  }
}
