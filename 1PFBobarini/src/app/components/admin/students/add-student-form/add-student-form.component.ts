import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Student, students } from 'src/app/models/students';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {


    formEstudiante: FormGroup = this.fb.group({
    dni: new FormControl('',  [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
    fechaNacimiento: new FormControl('', [Validators.required]),
  })

  constructor(
    public dialogRef : MatDialogRef<AddStudentFormComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  
  }

  save(){
    this.dialogRef.close(this.formEstudiante.value);
  }
}
