import { AuthService } from './auth/auth.service';
import { JWTTokenService } from './auth/jwttoken.service';
import { LocalStorageService } from './shared/localStorageService';
import { UniversalAppInterceptor } from './auth/httpUniversalInterceptor';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AlertComponent],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LoginService,
    AuthService,
    LocalStorageService,
    JWTTokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
