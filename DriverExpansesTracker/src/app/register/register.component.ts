import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IRegister } from '../models/User/register';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  message: string;

  registerModel: IRegister = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit() {
    this.navigateToHomeIfUserIsLoggedIn();
    this.userService.currentMessage.subscribe(res => this.message = res);
  }
  registerUser() {
      this.userService.register(this.registerModel).subscribe(res => {
        this.sendMessageToLoginComponent(res.status);
      }
    );
      this.router.navigate(['/login']);
  }

  sendMessageToLoginComponent(status) {

    if (status === 201) {
      this.userService.changeMessage('Twoje konto zostało utworzone pomyślnie');
    } else {
      this.userService.changeMessage('Nie udało się utworzyć konta spróbuj jeszcze raz');
    }
  }

  navigateToHomeIfUserIsLoggedIn() {
    if (localStorage.getItem('auth_token')) {
      this.router.navigate(['/home']);
    }
  }
}
