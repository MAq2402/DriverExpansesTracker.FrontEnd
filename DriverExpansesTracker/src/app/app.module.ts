import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateJourneyComponent } from './create-journey/create-journey.component';
import { CarComponent } from './car/car.component';
import { AlertComponent } from './alert/alert.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CarDashboardComponent } from './car-dashboard/car-dashboard.component';
import { MapFuelTypePipe } from './pipes/map-fuel-type.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    CreateJourneyComponent,
    CarComponent,
    AlertComponent,
    CarDashboardComponent,
    MapFuelTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbAlertModule,
    NgxSpinnerModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent, canActivate: [AuthGuard]},
        {path: 'register', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
        {path: 'cars', component: CarDashboardComponent, canActivate: [AuthGuard]},
        {path: 'caradd', component: CarComponent, canActivate: [AuthGuard]}
      ]
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
