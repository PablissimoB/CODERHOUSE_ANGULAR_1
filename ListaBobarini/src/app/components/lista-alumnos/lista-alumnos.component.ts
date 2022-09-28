import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

listaEstudiantes: Array<Student> = [
    {nombre: 'Kyle', apellido: 'Reese' , carrera: 'Angular', edad: 18, beca:true },
    {nombre: 'John', apellido: 'Connor' , carrera:'Phyton', edad: 25, beca:false },
    {nombre: 'Charlotte', apellido: 'Ferro' , carrera:'Phyton', edad: 20, beca:true },
    {nombre: 'Sarah', apellido: 'Connor' , carrera: 'Angular', edad: 28, beca:false },
];
background = 'claro';

  constructor() { }

  ngOnInit(): void {
  }
  setBackground(estilo:string){
    this.background=estilo;
  }
}
