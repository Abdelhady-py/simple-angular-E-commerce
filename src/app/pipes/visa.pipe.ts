import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visa'
})
export class VisaPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length === 16) {
      const formattedValue = value.replace(/(.{4})/g, '$1 - ');
      return formattedValue.trim();
    }
    return value;
  }

}
