import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject, of} from 'rxjs';
import {ILogin} from '../models/User/login';
import {IRegister} from '../models/User/register';
import { map } from 'rxjs/operators';
import { IUser } from '../models/User/user';
import { IToken } from '../models/Auth/token';
import { catchError, retry } from 'rxjs/operators';
import { ICar } from '../models/Car/car';


@Injectable({
 providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:52968/api/users';
  private messageBehaviorSubject = new BehaviorSubject('');
  currentMessage = this.messageBehaviorSubject.asObservable();


  constructor(private http: HttpClient) {

  }

//  getCurrentIdentity(token: IToken) {
//    return this.http.post<IUser>(this.baseUrl + '/currentIdentity', token );
//  }
//  getCurrentIdentity(token: IToken): Observable<IUser> {
//    const httpOptions = {
//      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     };
//    httpOptions.headers.append('Authorization', `Bearer ${token.value}`);
//  return this.http.post<IUser>(this.baseUrl + '/currentIdentity', token, httpOptions );
// }
  getCurrentIdentity(): Observable<HttpResponse<IUser>> {
    const token: IToken = { value: localStorage.getItem('auth_token') };
    console.log('token from getCurrentIdentity => ' + token.value);
    // const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${token.value}`,
    //  })};
    // TO DO: Ogarnąć funkcję i ptzyjąć jakiś template czy ma być Observable<HttpResponse<Object>> Czy bez httpResponse
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.value}`
    });
    return this.http.get<IUser>(this.baseUrl + '/currentIdentity', { headers: httpHeaders, observe: 'response' });
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
