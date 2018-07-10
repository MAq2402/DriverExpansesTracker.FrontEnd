import { Component, OnInit } from '@angular/core';
import {ILogin} from '../models/User/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login: ILogin;
  ngOnInit() {
  }
  loginUser() {

  }

}
