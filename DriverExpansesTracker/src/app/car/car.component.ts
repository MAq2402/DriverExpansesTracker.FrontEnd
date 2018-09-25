import { Component, OnInit } from '@angular/core';
import { ICar } from '../models/Car/car';
import { CarService } from '../services/car.service';
import { UserService } from '../services/user.service';
import { IUser } from '../models/User/user';
import { AlertComponent } from '../alert/alert.component';
import { FuelType } from '../models/Enums/fuel.type';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: ICar = {
    name : '',
    fuelConsumption100km: 0,
    fuelType: FuelType.benzine
  };

  private fuelTypeArray: Array<{value: number, label: string}>;

  private fuelTypesNames = new Map<number, string>([
    [FuelType.benzine, 'Benzyna'],
    [FuelType.diesel, 'Diesel'],
    [FuelType.electric, 'Elektryczny'],
    [FuelType.hybrid, 'Hybryda'],
    [FuelType.lpg, 'LPG']
  ]);

  constructor(private carService: CarService) { }

  ngOnInit() {}

  createCar() {
    console.log('dodawanie samochodu');
    // this.showAlert();
    this.carService.createCar(this.car)
      .subscribe(() => console.log('serwis zadzialal'));
    // this.carService.createCar(this.car)
    //  .subscribe(() => this.showAlert());
  }

}
