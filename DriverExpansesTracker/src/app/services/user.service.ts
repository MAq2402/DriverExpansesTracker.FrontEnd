import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {ILogin} from '../models/User/login';
import {IRegister} from '../models/User/register';
import { map } from 'rxjs/operators';


@Injectable({
 providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:52968/api/users';

  constructor(private http: Http) {

  }

  login(login: ILogin) {
    return this.http.post(this.baseUrl + '/login', login).subscribe((response) => {

    });
  }

  // getCurrentIdentity() {
  //   return this.http.get(this.baseUrl + '/currentIdentity');
  // }

  register(register: IRegister) {
    return this.http.post(this.baseUrl, register).subscribe((response) => {

    });
  }
}
