import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IRegister } from '../models/User/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  registerModel: IRegister = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit() {
  }

}
