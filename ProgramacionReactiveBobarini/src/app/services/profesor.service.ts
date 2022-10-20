import { Injectable } from '@angular/core';
import { Profesor } from '../model/profesors';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  profesores: Profesor[] = [
    {
      dni:1,
      nombre: 'Sarah',
      apellido: 'Uno'
  },
  {
    dni:2,
    nombre: 'Connor',
    apellido: 'Dos'
},
{
  dni:3,
  nombre: 'Kyle',
  apellido: 'Tres'
},
{
  dni:4,
  nombre: 'Reese',
  apellido: 'Cuatro'
}
]

  constructor() { }


  obtenerProfesorPromesa(): Promise<Profesor[] | any>{
    return new Promise((resolve, reject) => {
      if(this.profesores.length > 0)
      {
        resolve(this.profesores);
      }
      else{
        reject({});
      }
    });
  }
}
