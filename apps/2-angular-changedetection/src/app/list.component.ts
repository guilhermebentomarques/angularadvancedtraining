import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { combineLatest, interval, mergeMap, Observable, take } from "rxjs";
import { IItem } from "./item.interface";

@Component({
  selector: 'app-list',
  styles: [`:host { display: block; margin-top: 20px;} app-item { display: inline-block; width: 30px; height: 30px; }`],
  template: `
  <app-item *ngFor="let item of (syncedList$ | async)" [item]="item"></app-item>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() list: Observable<IItem>[] = [];

  public syncedList$!: Observable<IItem[]>;

  public ngOnInit(): void {
    this.syncedList$ = interval(1000).pipe(
      mergeMap(
        () => combineLatest(this.list).pipe(
          take(1)
        )
      )
    )
  }
}
