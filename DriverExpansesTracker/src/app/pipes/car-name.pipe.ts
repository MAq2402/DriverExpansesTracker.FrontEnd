import { Pipe, PipeTransform } from '@angular/core';
import { ICar } from '../models/Car/car';

@Pipe({
  name: 'carName'
})
export class CarNamePipe implements PipeTransform {

  transform(cars: ICar[], args?: any): string[] {
    return cars.map(car => car.name);
  }

}
