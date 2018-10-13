import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import { ICar } from '../models/Car/car';
import { AlertService } from '../services/alert.service';
import { CarService } from '../services/car.service';

import { Input, TemplateRef, ContentChild } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.css']
})


export class CreateJourneyComponent implements OnInit {

  @ContentChild(TemplateRef) stringTemplate: TemplateRef<NgForOfContext<String>>;

  private passengerCount = 1;
  cars: ICar[] = [];  // all driver cars
  selectedCar: ICar;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  constructor(
    private carService: CarService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getAllCars()
      .subscribe(cars => this.cars = cars);
  }

  addPassengerButtonOnClick() {
    const passengerHtml = $('.passenger'); // przeniesione z globalnej zmiennej
    this.passengerCount++;
    const newPassengerDiv = passengerHtml.clone();
    const passengerRoutesDiv = $('#passengerRoutes');
    newPassengerDiv.appendTo(passengerRoutesDiv);
  }

  send() {
    this.alertService.showAlert('DZIAŁA -- to jest jakiś testowy tekst', 'success');
  }

  carNameFormatter = (result: any): string => String(result.name);

  // TODO: usunąć carNamePipe
  /* zrobić paginigeim pobieranie użytkowniku na typheadzie "Pasażer" -> to w userservice -> pobieranie z paginigiem*/



  // car selection typehead:
  carTypeHeadList = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.cars
        : this.cars.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

}
