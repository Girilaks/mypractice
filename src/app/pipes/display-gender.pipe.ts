import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayGender'
})
export class DisplayGenderPipe implements PipeTransform {

  transform(value: string): string {
    return value == 'm' ? "Male" : "f" ? 'Female' : 'Transgender';
  }

}
