import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from './item.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-advanced-angular-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public list: Observable<IItem>[] = [];

  public constructor(private _dataService: DataService) {
  }


  public addItem() {
    this.list.push(this._dataService.getData());
  }

  public ngOnInit(): void {
      for(let i = 0; i < 1000; i++) {
        this.addItem();
      }
  }
}
