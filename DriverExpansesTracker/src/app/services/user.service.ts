import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILogin} from '../models/User/login';
import {IRegister} from '../models/User/register';
import { map } from 'rxjs/operators';
import { IUser } from '../models/User/user';


@Injectable({
 providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:52968/api/users';

  constructor(private http: HttpClient) {

  }

  login(login: ILogin) {
    return this.http.post(this.baseUrl + '/login', login).subscribe((response) => {

    });
  }

  getCurrentIdentity() {
    return this.http.get<IUser>(this.baseUrl + '/currentIdentity');
  }

  register(register: IRegister) {
    return this.http.post(this.baseUrl, register).subscribe((response) => {

    });
  }
}
