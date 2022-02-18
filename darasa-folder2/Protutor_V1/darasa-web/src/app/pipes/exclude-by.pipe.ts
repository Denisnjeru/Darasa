import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excludeBy'
})
export class ExcludeByPipe implements PipeTransform {

  transform(items: Array<any>, value: string): unknown {
    if (!items || !value) {
      return items;
    }
    return items.filter(x => x.id !== value);
  }

}
