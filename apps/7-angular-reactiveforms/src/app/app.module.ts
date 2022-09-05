import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './components/stars/star.component';
import { StarsComponent } from './components/stars/stars.component';
import { RateAbove3OnlyDirective } from './directives/rate-above-3.directive';

@NgModule({
  declarations: [AppComponent, StarComponent, StarsComponent, RateAbove3OnlyDirective],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
