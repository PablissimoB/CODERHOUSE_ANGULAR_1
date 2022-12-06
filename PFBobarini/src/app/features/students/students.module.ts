import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { InitStudentsComponent } from './components/init-students/init-students.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    ListStudentsComponent,
    InitStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
