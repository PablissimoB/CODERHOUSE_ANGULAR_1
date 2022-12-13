import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { InitStudentsComponent } from './components/init-students/init-students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StudentsEffects } from './state/students.effects';
import { studentsFeatureKey, reducer } from './state/students.reducer';
import { ViewStudentComponent } from './components/view-student/view-student.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    ListStudentsComponent,
    InitStudentsComponent,
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(studentsFeatureKey, reducer),
    EffectsModule.forFeature([StudentsEffects]),
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
