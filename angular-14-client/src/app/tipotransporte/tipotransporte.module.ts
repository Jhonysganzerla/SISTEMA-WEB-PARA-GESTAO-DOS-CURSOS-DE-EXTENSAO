import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TipoTransporteCrudComponent } from './crud/tipotransporte-crud.component';
import { TipoTransporteComponent } from './pages/tipotransporte.component';
import { TipoTransporteRoutingModule } from './tipotransporte-routing.module';
import { TipoTransporteService } from './tipotransporte.service';


@NgModule({
  declarations: [
    TipoTransporteComponent,
    TipoTransporteCrudComponent,
  ],
  providers: [
    TipoTransporteService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    TipoTransporteRoutingModule,
  ]
})
export class TipoTransporteModule { }
