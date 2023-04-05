import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { UniversalAppInterceptor } from './auth/httpUniversalInterceptor';
import { JWTTokenService } from './auth/jwttoken.service';
import { LoginModule } from './login/login.module';
import { LocalStorageService } from './shared/localStorageService';
import { SharedModule } from './shared/shared.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login/login.service';
import { ConfirmDialogComponent } from './shared/confirmDialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    LoginService,
    AuthService,
    LocalStorageService,
    JWTTokenService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [AlertComponent, ConfirmDialogComponent],
})
export class AppModule {}
