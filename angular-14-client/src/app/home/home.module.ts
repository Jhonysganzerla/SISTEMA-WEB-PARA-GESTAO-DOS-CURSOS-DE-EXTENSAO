import { HomeService } from './home.service';
import { HomeComponent } from './pages/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeService,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
