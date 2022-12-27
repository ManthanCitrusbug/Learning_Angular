import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAuthorized'
})
export class IsAuthorizedPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value >= 18 ){
      return "True"
    } else {
      return "False"
    }
  }

}
