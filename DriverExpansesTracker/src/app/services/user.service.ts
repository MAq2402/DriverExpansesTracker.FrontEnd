import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {ILogin} from '../models/User/login';
import {IRegister} from '../models/User/register';
import { map } from 'rxjs/operators';
import { IUser } from '../models/User/user';
import { IToken } from '../models/Auth/token';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
 providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:52968/api/users';
  private messageBehaviorSubject = new BehaviorSubject('');
  currentMessage = this.messageBehaviorSubject.asObservable();


  constructor(private http: HttpClient) {

  }

  getCurrentIdentity(token: IToken) {
    return this.http.post<IUser>(this.baseUrl + '/currentIdentity', token );
  }

  register(register: IRegister) {
    return this.http.post(this.baseUrl, register, {observe: 'response'});
  }

  changeMessage(message: string) {
    this.messageBehaviorSubject.next(message);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.changeMessage('Nie udało się utworzyć konta spróbuj jeszcze raz');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

}
