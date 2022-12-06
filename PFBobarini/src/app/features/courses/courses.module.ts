import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { EditCoursesComponent } from './components/edit-courses/edit-courses.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { InitCoursesComponent } from './components/init-courses/init-courses.component';


@NgModule({
  declarations: [
    AddCoursesComponent,
    EditCoursesComponent,
    ListCoursesComponent,
    InitCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
