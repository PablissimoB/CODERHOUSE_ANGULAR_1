import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Career } from 'src/app/models/career';
import { Students } from '../../models/students';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

existeDni !: boolean;
dni= '';
nombre ='';
apellido ='';
carrera ='';

carrers: Array<Career> =[
  {nombre:"Angular"},
  {nombre:"Phyton"},
  {nombre:"C#"},
]
formularioEstudianteEditar: FormGroup;
formularioEstudiante: FormGroup;
students: Array<Students>=[
  {fechaAlta: new Date("2022-10-01") ,dni: '10101011',nombre: 'Kyle', apellido: 'Reese' , carrera: 'Angular', deleted : false },
  {fechaAlta: new Date("2022-09-01"), dni: '10101010',nombre: 'John', apellido: 'Connor' , carrera:'Phyton', deleted : false},
  {fechaAlta: new Date("2022-08-01"), dni: '11111111',nombre: 'Charlotte', apellido: 'Ferro' , carrera:'Phyton', deleted : false},
  {fechaAlta: new Date("2022-07-01"), dni: '11111110',nombre: 'Sarah', apellido: 'Connor' , carrera: 'Angular', deleted : false},
];
studentSelected: any;
displayC='invisible';
displayE='invisible';
touchedFormDni: boolean =false;
touchedFormNombre: boolean =false;
touchedFormApellido: boolean =false;
touchedFormCarrera: boolean =false;





  constructor(
    private fb: FormBuilder
  ) { 
      this.formularioEstudiante = fb.group(
        {
        fechaAlta: new FormControl(),
        dni: new FormControl('',  [Validators.required]),
        nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
        carrera: new FormControl('', [Validators.required]),
    }
    );

    this.formularioEstudianteEditar = fb.group(
      {
      fechaAlta: new FormControl(),
      dni: new FormControl('',  [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
      carrera: new FormControl('', [Validators.required]),
  }
  );
    
  }

  ngOnInit(): void {
  }

  setVisibilityC(visibilidad:string){
    this.displayC=visibilidad;
  }
  setVisibilityE(visibilidad:string){
    this.displayE=visibilidad;
  }

  resetValues(){
    this.dni = '';
    this.nombre ='';
    this.apellido ='';
    this.carrera ='';
  }

  resetForm(){
    this.touchedFormDni = false;
    this.touchedFormNombre = false;
    this.touchedFormApellido = false;
    this.touchedFormCarrera = false;
  }


  addStudent(){
    const newStudent: Students ={
      fechaAlta : new Date(),
      dni: this.formularioEstudiante.value.dni,
      nombre: this.formularioEstudiante.value.nombre,
      apellido: this.formularioEstudiante.value.apellido,
      carrera: this.formularioEstudiante.value.carrera,
      deleted: false
    }
    this.students.push(newStudent); 
    this.setVisibilityC('invisible');
    this.resetValues();
  }

  
  deleteStudent(dniE:string){
    if(confirm("¿Desea eliminar el alumno dni " + dniE +" ?")) {
      const index = this.students.findIndex((Object)=>{
        return Object.dni === dniE;
      }
      )
      this.students[index].deleted = true;
    }

    this.setVisibilityE('invisible');
  }

  onFocusOutEvent(caso:string){
    switch(caso){
      case 'dni': this.touchedFormDni = true; break;
      case 'nombre': this.touchedFormNombre = true; break;
      case 'apellido': this.touchedFormApellido = true; break;
      case 'carrera': this.touchedFormCarrera = true; break;
    }
    
  }

  editStudent(dniE:string){
    this.setVisibilityC('invisible');
    this.displayE='visible';
    this.studentSelected = this.students.find(item => item.dni === dniE);
    this.dni = this.studentSelected.dni;
    this.nombre = this.studentSelected.nombre;
    this.apellido = this.studentSelected.apellido;
    this.carrera = this.studentSelected.carrera;
  }


  updateStudent(dniE:string){
    if(confirm("¿Desea modificar el alumno dni " + dniE +" ?")) {
      const index = this.students.findIndex((Object)=>{
        return Object.dni === dniE;
      }
      )
      this.students[index].dni = this.dni;
      this.students[index].nombre = this.nombre;
      this.students[index].apellido = this.apellido;
      this.students[index].carrera = this.carrera;

    }

    this.setVisibilityE('invisible');
  }


}
