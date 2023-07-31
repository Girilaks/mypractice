import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLongTextComma'
})
export class BreakLongTextCommaPipe implements PipeTransform {

  transform(value: any): any {
    let returnValue = '';
    if(value.length > 0) {
      returnValue = value.join('\r\n');
    }
    return returnValue;
  }

}
