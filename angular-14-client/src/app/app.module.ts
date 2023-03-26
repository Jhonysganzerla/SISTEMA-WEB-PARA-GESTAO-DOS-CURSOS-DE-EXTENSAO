import { SharedModule } from './shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from './auth/auth.service';
import { JWTTokenService } from './auth/jwttoken.service';
import { LocalStorageService } from './shared/localStorageService';
import { UniversalAppInterceptor } from './auth/httpUniversalInterceptor';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { ConfirmDialogComponent } from './shared/confirmDialog.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


@NgModule({
    declarations: [AppComponent, AlertComponent, ConfirmDialogComponent],
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
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
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
