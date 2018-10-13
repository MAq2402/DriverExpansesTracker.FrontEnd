import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CarComponent } from '../car/car.component';
import { ICar } from '../models/Car/car';
import { FuelType } from '../models/Enums/fuel.type';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.css'],
  // providers allow us to get a new istance of service singleton
  providers: [CarService]
})
export class CarDashboardComponent implements OnInit {

  cars: ICar[] = [];
  fromIndex = 0;
  stepIndex = 6;
  carsCount = 0;
  nextButtonDisabled = false;
  prevButtonDisabled = true;

  constructor(
    private modalService: NgbModal,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    // there we can add sth like slice etc. or progress-spinner
    this.carService.getAllCars()
      .subscribe(cars => {
        this.carsCount = cars.length;
        this.cars = cars;
      });
  }

  private getFuelTypeNumber(name: string) {
    return FuelType[name];
  }

  nextCars() {
    const nextStep = this.fromIndex + this.stepIndex;
    if (nextStep < this.carsCount) {
      this.fromIndex = nextStep;
      this.checkDisabledNavButtons(this.fromIndex);
    }
  }

  prevCars() {
    const backStep = this.fromIndex - this.stepIndex;
    if (backStep >= 0) {
      this.fromIndex = backStep;
      this.checkDisabledNavButtons(this.fromIndex);
    }
  }

  // TODO: zmienić na lepszą nazwę
  // sprawdzić fixa jak jak rowne stepIndex
  checkDisabledNavButtons(length: number) {
    if (length + this.stepIndex >= this.carsCount) {
      this.nextButtonDisabled = true;
    } else {
      this.nextButtonDisabled = false;
    }
    if (length - this.stepIndex < 0) {
      this.prevButtonDisabled = true;
    } else {
      this.prevButtonDisabled = false;
    }
  }

  getSlicedCars(): ICar[] {
    return this.cars.slice(this.fromIndex, this.fromIndex + this.stepIndex);
  }

  showNavButtons() {
    return this.carsCount > this.stepIndex;
  }

  openModalAddCar() {
    const modalRef = this.modalService.open(CarComponent);
    modalRef.componentInstance.name = 'AddCar';
    // after add append new car
    modalRef.result.then(() => this.getCars());
  }

  deleteCar(car: ICar) {
    if (confirm('Czy na pewno usunąć wybrany samochod?')) {
      this.carService.deleteCar(car)
        .subscribe(() => this.getCars());
    }
  }

}
