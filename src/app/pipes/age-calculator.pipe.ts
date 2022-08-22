import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculator'
})
export class AgeCalculatorPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    var timeDiff = Math.abs(Date.now() - new Date(value).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
