import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPipe'
})
export class BooleanPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? args[0] : args[1];
  }

}
