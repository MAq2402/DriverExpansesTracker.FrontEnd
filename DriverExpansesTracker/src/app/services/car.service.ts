import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { ICar } from '../models/Car/car';
import { IUser } from '../models/User/user';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';



@Injectable({
 providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost:52968/api/users/';
  user: IUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private errorService: ErrorService) {}

    createCar(car: ICar) {
    // JWT token provided by jwt.interceptor
    return this.http.post(this.baseUrl + this.user.id + '/cars', car)
      .pipe(
        tap(_ => this.alertService.success(`Dodano samochod: ${car.name}`)),
        catchError(this.errorService.handleError<any>('Operacja dodawania samochodu'))
      );
  }

}

