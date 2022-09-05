import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RateAbove3Only } from './validators/rate-above-3.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public stars = new FormControl<number>(1,  [ RateAbove3Only ]);
}
