import { Pipe, PipeTransform } from '@angular/core';

import { FuelType } from '../models/Enums/fuel.type';

@Pipe({
  name: 'mapFuelType'
})
export class MapFuelTypePipe implements PipeTransform {

  private mappedFuelTypesNames = new Map<number, string>([
    [FuelType.benzine, 'Benzyna'],
    [FuelType.diesel, 'Diesel'],
    [FuelType.electric, 'Elektryczny'],
    [FuelType.hybrid, 'Hybryda'],
    [FuelType.lpg, 'LPG']
  ]);

  transform(value: number, args?: any): string {
    return this.mappedFuelTypesNames.get(value) || FuelType[value] || 'brak danych';
  }

}
