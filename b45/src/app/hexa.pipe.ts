import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(inp) {
    return inp.toString(16);
  }

}
