
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {
  
  transform(value: any=[], arg: any): any {
    if (arg === '' || arg.length <2 ) return value;
    const resultAll=[];
    for (const listas of value){
      if (listas.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultAll.push(listas);
      }
    }
    return resultAll;
  }

}
