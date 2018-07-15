import { Component, OnInit } from '@angular/core';
import {ILogin} from '../models/User/login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  login: ILogin = {
    userName: '',
    password: ''
  };
  ngOnInit() {
  }
  loginUser() {
    this.userService.login(this.login);
  }

}
