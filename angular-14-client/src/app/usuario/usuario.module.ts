import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CursosGraduacaoService } from './../cursosgraduacao/cursosgraduacao.service';
import { CursosGraduacao } from './../cursosgraduacao/model/cursosgraduacao';
import { UsuarioCrudComponent } from './pages/crud/usuario-crud.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './usuario.service';
import { UsuarioComponent } from './pages/usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioCrudComponent,
  ],
  providers: [
    UsuarioService,
    CursosGraduacaoService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
