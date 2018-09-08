import { Component, OnInit } from '@angular/core';
import {ILogin} from '../models/User/login';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }
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
    this.authService.login(this.credentials).subscribe(
      result => {
        if (result) {
           this.router.navigate(['/home']);
        }
    });
  }

  navigateToHomeIfUserIsLoggedIn() {
    if (localStorage.getItem('auth_token')) {
      this.router.navigate(['/home']);
    }
  }

}
