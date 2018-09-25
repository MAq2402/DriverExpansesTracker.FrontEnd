import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private userService: UserService) {
   }

  ngOnInit() {
    // musi być asynchroniczne pobranie usera (w localStorage jeszcze się nie pojawia currentUser)
    this.getCurrentUser();
    // dałoby sie to zrobić tak, gdyby backen nam posyłał na loginie usera i tokena,
    // wtedy by trzeba też zmienić trochę autService.login() tak żeby jak z tokenem teraz jest
    // this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  getCurrentUser() {
    this.userService.getCurrentIdentity().subscribe(data => this.user = data.body);
  }

  logout() {
    this.userService.logout();
  }

}
