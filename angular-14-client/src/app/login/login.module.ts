import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginComponent } from './pages/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  providers: [
    LoginService,
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
