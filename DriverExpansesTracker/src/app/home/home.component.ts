import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/User/user';
import { UserService } from '../services/user.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarService] // provide new singleton of carService (for actual user)
})
export class HomeComponent implements OnInit {


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  userLoaded() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }



}
