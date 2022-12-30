import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var range = []
    for (let i=1; i< value; i++){
      range.push(i)
    }
    return range
  }

}
