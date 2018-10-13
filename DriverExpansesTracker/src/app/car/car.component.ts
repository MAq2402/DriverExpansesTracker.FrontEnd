import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ICar } from '../models/Car/car';
import { CarService } from '../services/car.service';
import { FuelType, getFuelTypeArray } from '../models/Enums/fuel.type';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {CarDashboardComponent} from '../car-dashboard/car-dashboard.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: ICar = {
    name : '',
    fuelConsumption100km: 0,
    fuelType: FuelType.benzine,
    _links: null
  };
  fuelTypes = getFuelTypeArray();

  constructor(
    private carService: CarService,
    private activeModal: NgbActiveModal,
    private location: Location
    ) { }

  ngOnInit() {}

  createCar() {
    this.carService.createCar(this.car)
      .subscribe((data: ICar) => {
          if (data) /* success path */ { this.closeModal(); }});
  }

  private closeModal() {
    this.activeModal.close('success');
  }

}
