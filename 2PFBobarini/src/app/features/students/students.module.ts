import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { InitStudentComponent } from './components/init-student/init-student.component';


@NgModule({
  declarations: [
    ListStudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    InitStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
  ]
})
export class StudentsModule { }
