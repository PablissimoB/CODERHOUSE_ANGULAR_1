import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/students';

@Pipe({
  name: 'pipeNombreCompleto',
  pure: false
})
export class PipeNombreCompletoPipe implements PipeTransform {

  transform(value1: Student, ...args: unknown[]): string {
    return value1.apellido.toUpperCase() + ', ' + value1.nombre;
  }

}
