import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CursosService } from '../cursos/cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosCrudComponent } from './pages/crud/cursos-crud.component';
import { CursosComponent } from './pages/cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosCrudComponent,
  ],
  providers: [
    CursosService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    CursosRoutingModule,
  ]
})
export class CursosModule { }
