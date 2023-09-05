import { Pipe, PipeTransform } from '@angular/core';
import { userModel } from '../models/user.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(
    data: userModel[],
    query: string,
    properties: string
  ): userModel[] | [] {
    if (!query) return data;

    const fields = properties.split(',');
    const regex = new RegExp(query, 'i');
    return data.filter((item) => {
      return fields.find((prop) => {
        const field = prop.split('.');
        let curr = item;

        for (let key of field) {
          curr = curr[key];
        }

        if (typeof curr === 'string') {
          return regex.test(curr);
        } else return false;
      });
    });

    return [];
  }
}
