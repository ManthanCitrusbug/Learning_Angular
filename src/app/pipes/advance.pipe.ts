import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advance'
})
export class AdvancePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    var [slice] = args;
    return value * slice
    // var valueList = []
    // for (let i=1; i <= value; i++) {
    //   valueList.push(i)
    // }
    // var chunkData = []
    // var finalList = []
    // for(let i of valueList){
    //   if (i%slice == 0){
    //     finalList.push(chunkData)
    //     chunkData = []
    //   } else {
    //     chunkData.push(i)
    //     delete(valueList[i-1])
    //   }
    // }
    
    // return finalList;
  }

}


