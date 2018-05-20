import { Pipe, PipeTransform } from '@angular/core';

const Gender = {
  m: "Man",
  w: "Woman",
};

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Gender[value] ? Gender[value] : "";
  }

}
