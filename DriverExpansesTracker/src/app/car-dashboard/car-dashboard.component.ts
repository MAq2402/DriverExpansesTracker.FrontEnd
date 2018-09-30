import { Component, OnInit } from '@angular/core';

import { ICar } from '../models/Car/car';
import { CarService } from '../services/car.service';
import { AlertService } from '../services/alert.service';
import { ErrorService } from '../services/error.service';
import { FuelType } from '../models/Enums/fuel.type';
import { isString } from 'util';

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.css']
})
export class CarDashboardComponent implements OnInit {
  cars: ICar[] = [];

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    // there we can add sth like slice etc. or progress-spinner
    this.carService.getAllCars()
      .subscribe(cars => this.cars = cars);
  }

  private mapToNumber(name: string) {
    return FuelType[name];
  }

}
