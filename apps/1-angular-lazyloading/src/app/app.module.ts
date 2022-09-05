import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DelayedLoadingStrategy } from './stategies/delayed-loading.strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'users',
          loadChildren: () =>
            import('./users/users.module').then((m) => m.UsersModule),
        },
        {
          path: 'items',
          data: {
            delay: 5000,
          },
          loadChildren: () =>
            import('./items/items.module').then((m) => m.ItemsModule),
        },
        {
          path: 'orders',
          data: {
            delay: 10000,
          },
          loadChildren: () =>
            import('./orders/orders.module').then((m) => m.OrdersModule),
        },
      ],
      {
        preloadingStrategy: DelayedLoadingStrategy,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
