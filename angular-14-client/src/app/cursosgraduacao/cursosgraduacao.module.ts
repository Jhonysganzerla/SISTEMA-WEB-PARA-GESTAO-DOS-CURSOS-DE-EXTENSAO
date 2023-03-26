import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CursosGraduacaoService } from './../cursosgraduacao/cursosgraduacao.service';
import { CursosGraduacaoRoutingModule } from './cursosgraduacao-routing.module';
import { CursosGraduacaoCrudComponent } from './pages/crud/cursosgraduacao-crud.component';
import { CursosGraduacaoComponent } from './pages/cursosgraduacao.component';


@NgModule({
  declarations: [
    CursosGraduacaoComponent,
    CursosGraduacaoCrudComponent,
  ],
  providers: [
    CursosGraduacaoService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    CursosGraduacaoRoutingModule,
  ]
})
export class CursosGraduacaoModule { }
