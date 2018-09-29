import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ICar } from '../models/Car/car';
import { CarService } from '../services/car.service';
import { FuelType, getFuelTypeArray } from '../models/Enums/fuel.type';

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

  fuelTypes: Array<{value: number, label: string}> = getFuelTypeArray();

  constructor(
    private carService: CarService,
    private location: Location
    ) { }

  ngOnInit() {}

  createCar() {
    this.carService.createCar(this.car)
      .subscribe((data: ICar) => {
          if (data) /* success path */ {this.location.back(); }});
  }

}
