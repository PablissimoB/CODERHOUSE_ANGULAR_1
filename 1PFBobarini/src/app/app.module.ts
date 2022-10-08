import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { ContentAdminComponent } from './components/admin/content-admin-student/content-admin-student.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { AdminViewComponent } from './components/admin/admin-view/admin-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule} from '@angular/forms';
import { AddStudentFormComponent } from './components/admin/students/add-student-form/add-student-form.component';
import { EditStudentFormComponent } from './components/admin/students/edit-student-form/edit-student-form.component'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {PipeNombreCompletoPipe} from './pipes/pipe-nombre-completo.pipe'
import { DirectiveTitleDirective } from './directives/directive-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    NavbarAdminComponent,
    ContentAdminComponent,
    AdminViewComponent,
    FooterComponent,
    AddStudentFormComponent,
    EditStudentFormComponent,
    PipeNombreCompletoPipe,
    DirectiveTitleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
