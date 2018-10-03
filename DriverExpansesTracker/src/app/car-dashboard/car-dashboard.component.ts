import { Component, OnInit, Inject, PLATFORM_ID, Injector } from '@angular/core';

import { ICar } from '../models/Car/car';
import { FuelType } from '../models/Enums/fuel.type';
import { CarService } from '../services/car.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CarComponent } from '../car/car.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.css'],
  // providers allow us to get a new istance of service singleton
  providers: [CarService]
})
export class CarDashboardComponent implements OnInit {

  // private modalService: NgbModal;

  cars: ICar[] = [];
  fromIndex = 0;
  stepIndex = 6;
  carsCount = 0;
  nextDisabled = false;
  prevDisabled = true;

  constructor(
    /*@Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector,*/
    private modalService: NgbModal,
    private carService: CarService
  ) {
    /*if (isPlatformBrowser(this.platformId)) {
      this.modalService = this.injector.get(NgbModal);
    }*/
  }

  ngOnInit() {
    this.getCars();
  }

  /* TODO: dodac pagination (z bootstrapa, wyświtlany tylko gdy więcej niż 6 samochodw) żeby po 6 samochodow wyświetlał
           ogarnąć wygląd (żeby położone było jak create-journey-component a nie car-copmonent)
           zrobić car component jako modal (z bootstrapa)
           przciski w car-dashboard-component ogarnąć
  */

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

  next() {
    const nextStep = this.fromIndex + this.stepIndex;
    if (nextStep < this.carsCount) {
      this.fromIndex = nextStep;
      this.checkDiasbled(this.fromIndex);
    }
  }

  prev() {
    const backStep = this.fromIndex - this.stepIndex;
    if (backStep >= 0) {
      this.fromIndex = backStep;
      this.checkDiasbled(this.fromIndex);
    }
  }

  checkDiasbled(length: number) {
    if (length + this.stepIndex > this.carsCount) {
      this.nextDisabled = true;
    } else {
      this.nextDisabled = false;
    }
    if (length - this.stepIndex < 0) {
      this.prevDisabled = true;
    } else {
      this.prevDisabled = false;
    }
  }

  getSlicedCars(): ICar[] {
    return this.cars.slice(this.fromIndex, this.fromIndex + this.stepIndex);
  }

  openModalAddCar() {
    const modalRef = this.modalService.open(CarComponent);
    modalRef.componentInstance.name = 'AddCar';
  }

}
