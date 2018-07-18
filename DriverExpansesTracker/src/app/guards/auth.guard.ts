import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../models/User/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: IUser;
  constructor(private userService: UserService, private router: Router) {

  }
  canActivate() {
    this.getCurrentIdentity();
    if (this.user == null) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

  getCurrentIdentity() {
    alert('currentIdentity');
    this.userService.getCurrentIdentity().subscribe((data: IUser) => {
      this.user = data;
    });
  }
}
