import { Pipe, PipeTransform } from '@angular/core';
import { camelCase } from 'lodash';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    console.log('camelCase');

    return camelCase(value);
  }

}
