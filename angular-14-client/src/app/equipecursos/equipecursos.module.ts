import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EquipeCursosRoutingModule } from './equipecursos-routing.module';
import { EquipeCursosService } from './equipecursos.service';
import { EquipeCursosCrudComponent } from './pages/crud/equipecursos-crud.component';
import { EquipeCursosComponent } from './pages/equipecursos.component';

@NgModule({
  declarations: [
    EquipeCursosComponent,
    EquipeCursosCrudComponent,
  ],
  providers: [
    EquipeCursosService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    EquipeCursosRoutingModule,
  ]
})
export class EquipeCursosModule { }
