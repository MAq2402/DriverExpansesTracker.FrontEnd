import { Component, OnInit } from '@angular/core';
import { ILogin } from '../models/User/login';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private alertService: AlertService,
    private spinnerService: NgxSpinnerService,
    private router: Router) { }
  credentials: ILogin = {
    userName: '',
    password: ''
  };

  message: string;
  ngOnInit() {
    this.navigateToHomeIfUserIsLoggedIn();
    this.userService.currentMessage.subscribe(res => this.message = res);
  }
  loginUser() {
    this.authService.login(this.credentials)
      .subscribe(
        data => {
          this.spinnerService.show();
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error('Niepoprawne dane logowania.');
        }
      );
  }

  navigateToHomeIfUserIsLoggedIn() {
    if (localStorage.getItem('auth_token')) {
      this.router.navigate(['/home']);
    }
  }

}
