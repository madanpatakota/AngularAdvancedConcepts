import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimmer'
})


//input value and return a transformed value
export class TrimmerPipe implements PipeTransform {

  transform(value: any) {
    console.log("**************" , value);

    return value.substring(0,20) + "...." + "more"

    //return null;
  }

}
