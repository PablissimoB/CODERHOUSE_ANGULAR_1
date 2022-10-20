import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule } from '@angular/forms';
import { BooleanPipePipe } from './pipes/boolean-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    BooleanPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
