import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milli'
})
export class MilliPipe implements PipeTransform {

  transform(value){
    return value.getTime();
  }

}
