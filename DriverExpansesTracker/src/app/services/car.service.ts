import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../models/User/user';
import { ICar } from '../models/Car/car';
import { UserService } from './user.service';
import { IToken } from '../models/Auth/token';



@Injectable({
 providedIn: 'root'
})
export class CarService {

  baseUrl = 'http://localhost:52968/api/users/';
  user: IUser;
  // car: ICar;
  token: IToken;
  // tokenValue: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.initVariables();
  }

  initVariables() {
    this.userService.getCurrentIdentity()
    .subscribe(res => {
      this.user = res.body;
    });
    // TODO: wrzucić tu też tokena?
  }

  createCar(car: ICar) {
    this.token = { value: localStorage.getItem('auth_token') };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token.value}` })
      };
    // httpOptions.headers.append('Authorization', `Bearer ${this.token.value}`);

    // return this.http.post<ICar>(this.baseUrl + this.user.id + '/cars', car, httpOptions);
    return this.http.post(this.baseUrl + this.user.id + '/cars', car, httpOptions);
  }

}

