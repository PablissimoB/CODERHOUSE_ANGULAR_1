import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Course } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  cursos: Course[]= [
    {
      nombre: 'Angular',
      comision: '1',
      profesor: 'Sarah',
      inicio: new Date('2022-08-1'),
      fin: new Date('2022-10-31'),
      activo: true,
      img: '../../../assets/img/angular.png'
  },
  {
    nombre: 'React',
    comision: '2',
    profesor: 'Connor',
    inicio: new Date('2022-09-1'),
    fin: new Date('2022-11-30'),
    activo: true,
    img: '../../../assets/img/react.png'
},
{
  nombre: 'Node',
  comision: '3',
  profesor: 'Kyle',
  inicio: new Date('2022-10-1'),
  fin: new Date('2022-12-31'),
  activo: true,
  img: '../../../assets/img/node.png'
},
{
nombre: 'MySql',
comision: '4',
profesor: 'Reese',
inicio: new Date('2022-11-1'),
fin: new Date('2023-01-31'),
activo: false,
img: '../../../assets/img/mysql.png'
}
]

cursos$: Observable<Course[]>;

  constructor() 
  { 
    this.cursos$ = new Observable<Course[]>((suscriptor) => {
      suscriptor.next(this.cursos);
    });
  }

  obtenerCursosObservable(){
   return this.cursos$;
  }



}
