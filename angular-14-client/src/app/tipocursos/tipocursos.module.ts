import { TipoCursosService } from './tipocursos.service';
import { TipoCursosCrudComponent } from './crud/tipocursos-crud.component';
import { TipoCursosComponent } from './pages/tipocursos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TipoCursosRoutingModule } from './tipocursos-routing.module';


@NgModule({
  declarations: [
    TipoCursosComponent,
    TipoCursosCrudComponent,
  ],
  providers: [
    TipoCursosService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    TipoCursosRoutingModule,
  ]
})
export class TipoCursosModule { }
