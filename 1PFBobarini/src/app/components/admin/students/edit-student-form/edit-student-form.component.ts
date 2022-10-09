import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  selector: 'app-edit-student-form',
  templateUrl: './edit-student-form.component.html',
  styleUrls: ['./edit-student-form.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
})
export class EditStudentFormComponent implements OnInit {

  estudianteEditar : any;
  maxDate:Date;
  
  formEstudiante: FormGroup = this.fb.group({
    dni: new FormControl(this.data.dataKey.dni,  [Validators.required]),
    nombre: new FormControl(this.data.dataKey.nombre, [Validators.required, Validators.minLength(2)]),
    apellido: new FormControl(this.data.dataKey.apellido, [Validators.required, Validators.minLength(2)]),
    fechaNacimiento: new FormControl(this.data.dataKey.fechaNacimiento, [Validators.required]),
    mail:new FormControl(this.data.dataKey.mail ,[Validators.pattern('^[a-z0-9._+$]+@[a-z]+\\.[a-z]{2,3}$'),Validators.required]),
  })


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef : MatDialogRef<EditStudentFormComponent>,
    private fb: FormBuilder
  ) {
    this.maxDate = new Date();
   }

  ngOnInit(): void {
    this.estudianteEditar = this.data.dataKey;
  }

  save(){
    this.dialogRef.close(this.formEstudiante.value);
  }
}
