
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any=[], arg: any): any {
    if (arg === '' || arg.length <2 ) return value;
    const resultAll=[];
    for (const listas of value){
      //Cambiando constante de evaluación (que en este caso es "name") por otra diferente
      //el usuario obtendrá otro método de evaluación
      if (listas.house.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultAll.push(listas);
      }
    }
    return resultAll;
  }

}



