import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILogin} from '../models/User/login';
import {IRegister} from '../models/User/register';
import { map } from 'rxjs/operators';
import { IUser } from '../models/User/user';
import { IToken } from '../models/Auth/token';


@Injectable({
 providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:52968/api/users';

  constructor(private http: HttpClient) {

  }

  getCurrentIdentity(token: IToken) {
    return this.http.post<IUser>(this.baseUrl + '/currentIdentity', token );
  }

  register(register: IRegister) {
    return this.http.post(this.baseUrl, register).subscribe((response) => {

    });
  }
}
