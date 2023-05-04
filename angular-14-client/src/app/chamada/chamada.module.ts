import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ChamadaRoutingModule } from './chamada-routing.module';
import { ChamadaCrudComponent } from './pages/crud/chamada-crud.component';
import { ChamadaComponent } from './pages/chamada.component';
import { ChamadaService } from './chamada.service';


@NgModule({
  declarations: [
    ChamadaComponent,
    ChamadaCrudComponent,
  ],
  providers: [
    ChamadaService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ChamadaRoutingModule,
  ]
})
export class ChamadaModule { }
