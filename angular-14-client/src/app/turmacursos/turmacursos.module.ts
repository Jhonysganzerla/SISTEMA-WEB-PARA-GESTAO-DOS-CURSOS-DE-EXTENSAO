import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CursosService } from '../cursos/cursos.service';
import { TurmaCursosRoutingModule } from './turmacursos-routing.module';
import { TurmaCursosCrudComponent } from './pages/crud/turmacursos-crud.component';
import { TurmaCursosComponent } from './pages/turmacursos.component';


@NgModule({
  declarations: [
    TurmaCursosComponent,
    TurmaCursosCrudComponent,
  ],
  providers: [
    CursosService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    TurmaCursosRoutingModule,
  ]
})
export class TurmaCursosModule { }
