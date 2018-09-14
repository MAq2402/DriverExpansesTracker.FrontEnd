import { Component, OnInit } from '@angular/core';
import { ICar } from '../models/Car/car';
import { CarService } from '../services/car.service';
import { UserService } from '../services/user.service';
import { IUser } from '../models/User/user';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService) { }
  car: ICar = {
    name : '',
    fuelConsumption100km: 0,
    fuelType: 0
  };

  // fuelType: FuelType;
  ngOnInit() {
  }

  showAlert() {
    alert('OK');
  }

  createCar() {
    console.log('dodawanie samochodu');
    // this.showAlert();
    this.carService.createCar(this.car)
      .subscribe(() => console.log('serwis zadzialal'));
    // this.carService.createCar(this.car)
    //  .subscribe(() => this.showAlert());
  }

}
