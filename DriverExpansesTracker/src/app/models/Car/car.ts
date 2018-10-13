import { FuelType } from './../Enums/fuel.type';
import { ILinks } from '../Links/links';

export interface ICar {
  name: string;
  fuelConsumption100km: number;
  fuelType: FuelType;
  _links: ILinks;
}
