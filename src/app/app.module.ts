import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'test2', component: TestComponent },
  ]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
