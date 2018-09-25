import { FuelType } from './../Enums/fuel.type';

export interface ICar {
  name: string;
  fuelConsumption100km: number;
  fuelType: FuelType;
}
