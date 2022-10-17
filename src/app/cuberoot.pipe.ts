import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuberoot'
})
export class CuberootPipe implements PipeTransform {

  transform(value: number): number {
    return Math.cbrt(value);
  }
}
