import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCap'
})
export class FirstCapPipe implements PipeTransform {

  transform(inp) {
    //inp = inp.toLowerCase();
    let str = '';
    str = inp[0].toUpperCase();
    str += inp.substr(1, inp.length-1);
    return str;
  }

}
