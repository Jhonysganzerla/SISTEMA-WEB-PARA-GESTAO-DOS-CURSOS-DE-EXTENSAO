import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { HomeService } from './home.service';
import { HomeComponent } from './pages/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
