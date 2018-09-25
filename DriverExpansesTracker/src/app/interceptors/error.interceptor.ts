import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            /*if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.userService.logout();
                location.reload(true);
            }*/

            const details = Object.keys(err.error).map(obj => err.error[obj]);
            let errorDetail = '';
            details.forEach(msg => errorDetail += msg[0]);
            return throwError({clientMessage: errorDetail, serverMessage: err.status + ' - ' + err.statusText || err.error.message});
        }));
    }
}
