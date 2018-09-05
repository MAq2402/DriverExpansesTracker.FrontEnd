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
  car: ICar;
  token: IToken;

  constructor(private http: HttpClient, private userService: UserService) {

  }

  createCar() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.token.value = localStorage.getItem('auth_token');
    httpOptions.headers.append('Authorization', `Bearer ${this.token.value}`);

    this.userService.getCurrentIdentity(this.token).subscribe(res => this.user = res);

    return this.http.post<ICar>(this.baseUrl + this.user.id + '/cars', this.car, httpOptions);
  }

}

