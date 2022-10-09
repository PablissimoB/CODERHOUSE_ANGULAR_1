import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Student, students } from 'src/app/models/students';
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';



export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
  },
};



@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
})
export class AddStudentFormComponent implements OnInit {

    maxDate:Date;
    formEstudiante: FormGroup = this.fb.group({
    dni: new FormControl('',  [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    mail:new FormControl('',[Validators.pattern('^[a-z0-9._+$]+@[a-z]+\\.[a-z]{2,3}$'),Validators.required]),

  })

  constructor(
    public dialogRef : MatDialogRef<AddStudentFormComponent>,
    private fb: FormBuilder
  ) { 
    this.maxDate = new Date();
  }

  ngOnInit(): void {
  
  }

  save(){
    this.dialogRef.close(this.formEstudiante.value);
  }
  
}
