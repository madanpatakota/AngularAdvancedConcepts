import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
})
//input value and return a transformed value
export class ArrayFilterPipe implements PipeTransform {
  transform(value: any, args1: any, args2: any): any {
    value = value.splice(0, args1);

    // now value contains cusomter a , customer b , customer c

    value = value.map((x: any) => x.replace('Customer', args2 ));

    return value;
  }
}
