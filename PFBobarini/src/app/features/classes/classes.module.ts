import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { EditClassesComponent } from './components/edit-classes/edit-classes.component';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { InitClassesComponent } from './components/init-classes/init-classes.component';
import { AddStudentClassesComponent } from './components/add-student-classes/add-student-classes.component';


@NgModule({
  declarations: [
    AddClassesComponent,
    EditClassesComponent,
    ListClassesComponent,
    InitClassesComponent,
    AddStudentClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
