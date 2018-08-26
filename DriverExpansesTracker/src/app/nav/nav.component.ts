import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/User/user';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/internal/operators/map';
import { IToken } from '../models/Auth/token';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: IUser;
  token: IToken = {
    value: localStorage.getItem('auth_token')
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentIdentity(this.token).subscribe(data => this.user = data);

  }

}
