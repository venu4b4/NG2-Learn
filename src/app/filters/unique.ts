import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique',
  pure: false
})
export class uniquePipe implements PipeTransform {
  transform(array: any,name : any): any {
    return this.removeDuplicates(array, name);
  }

  removeDuplicates(arr : any, prop : any) {
    var new_arr = [];
    var lookup  = {};

    for (var i in arr) {
      lookup[arr[i][prop]] = arr[i];
    }

    for (i in lookup) {
      new_arr.push(lookup[i]);
    }

    return new_arr;
}

}
