import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import * as Sentry from '@sentry/angular-ivy';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(trace: Sentry.TraceService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
