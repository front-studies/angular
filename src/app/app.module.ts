import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirst2Component } from './my-first2/my-first2.component';
import { CoursesModule } from './courses/courses.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirst2Component,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
