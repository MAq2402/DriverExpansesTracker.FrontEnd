import { Component, OnInit } from '@angular/core';
import { ICar } from '../models/Car/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService) { }
  car: ICar;
  fuelType: FuelType;
  ngOnInit() {
  }

  createCar() {
  }

}
