import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { PaymentsComponent } from './payments/payments.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsComponent,
    PaymentsComponent,
    NavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
