import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { HabilidadesComponent } from './pages/habilidades.component';
import { HabilidadesService } from './habilidades.service';
import { HabilidadesCrudComponent } from './crud/habilidades-crud.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HabilidadesComponent,
    HabilidadesCrudComponent,
  ],
  providers: [
    HabilidadesService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    HabilidadesRoutingModule,
  ]
})
export class HabilidadesModule { }
