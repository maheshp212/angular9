import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pi'
})
export class PiPipe implements PipeTransform {

  transform(value: number ) {
    return value*3.14159265359 ;
  }

}


@Pipe({
  name: 'firstCaps'
})
export class firstCapsPipe implements PipeTransform {

  transform(str: string ) {
    var  res = '';
    var arr = str.split(' ');
    for(var i=0; i<arr.length; i++){
      let uppercase = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length).toLowerCase();
      res +=" " +  uppercase;
    }
    return  res ;
  }

}
