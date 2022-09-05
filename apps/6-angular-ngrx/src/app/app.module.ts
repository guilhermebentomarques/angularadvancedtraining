import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
