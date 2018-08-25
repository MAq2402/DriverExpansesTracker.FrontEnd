import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent, canActivate: [AuthGuard]},
        {path: 'register', component: RegisterComponent},
        {path: 'login', component: LoginComponent},
        {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
