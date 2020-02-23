import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(inp:number, p1:number,p2:number,p3:number = 0):number {
    return inp*(p1+p2+p3);
  }

}
