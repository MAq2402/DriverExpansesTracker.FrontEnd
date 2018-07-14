import { Component, OnInit } from '@angular/core';
import {ILogin} from '../models/User/login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login: ILogin;
  test: string;
  ngOnInit() {
  }
  loginUser(): void {

    alert(this.test);
  }

}
