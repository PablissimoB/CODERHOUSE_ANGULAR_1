import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-student-form',
  templateUrl: './edit-student-form.component.html',
  styleUrls: ['./edit-student-form.component.css']
})
export class EditStudentFormComponent implements OnInit {

  estudianteEditar : any;

  
  formEstudiante: FormGroup = this.fb.group({
    dni: new FormControl(this.data.dataKey.dni,  [Validators.required]),
    nombre: new FormControl(this.data.dataKey.nombre, [Validators.required, Validators.minLength(2)]),
    apellido: new FormControl(this.data.dataKey.apellido, [Validators.required, Validators.minLength(2)]),
    fechaNacimiento: new FormControl(this.data.dataKey.fechaNacimiento, [Validators.required]),
  })


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef : MatDialogRef<EditStudentFormComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.estudianteEditar = this.data.dataKey;
  }

  save(){
    this.dialogRef.close(this.formEstudiante.value);
  }
}
