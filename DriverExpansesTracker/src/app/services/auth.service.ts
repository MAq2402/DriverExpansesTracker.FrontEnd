import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {ILogin} from '../models/User/login';
import {IRegister} from '../models/User/register';
import { IUser } from '../models/User/user';
import { tap, map } from 'rxjs/internal/operators';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
 providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:52968/api/auth';
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);

  constructor(private http: Http,
              private userService: UserService,
              private spinnerService: NgxSpinnerService) {

  }

  login(credentials: ILogin): Observable<boolean> {
    const headers = new Headers();
    return this.http.post(
      this.baseUrl + '/login',
      credentials, {headers}
      )
      .pipe(map(res => res.json()))
      .pipe(
        map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.userService.getCurrentIdentity()
          .pipe(tap(_ => this.spinnerService.hide()))
          .subscribe(user => localStorage.setItem('currentUser', JSON.stringify(user.body)));
        this._authNavStatusSource.next(true);
        return true;
        }),
      );
  }
  isLoggedIn() {
    return !!localStorage.getItem('auth_token');
  }

}


