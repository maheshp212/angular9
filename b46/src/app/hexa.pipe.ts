import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(value: any) {
    return value.toString(16);
    }

}
