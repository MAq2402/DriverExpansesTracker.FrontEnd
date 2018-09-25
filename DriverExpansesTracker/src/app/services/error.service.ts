import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private alertService: AlertService) { }

  public handleError<T> (operation = 'Operacja', result?: T) {
    return (error: any): Observable<T> => {
      // server-error log in console
      console.error(error.serverMessage);
      // client-error show in browser window
      this.alertService.error(`${operation} nie powiodła się: ${error.clientMessage}`);
      // keep the application running
      return of(result as T);
    };
  }

}
