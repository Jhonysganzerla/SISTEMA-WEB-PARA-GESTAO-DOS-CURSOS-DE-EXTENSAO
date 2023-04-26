import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeCursosComponent } from './pages/equipecursos.component';
import { EquipeCursosCrudComponent } from './pages/crud/equipecursos-crud.component';

const routes: Routes = [
  { path: '', component: EquipeCursosComponent, },
  { path: 'novo', component: EquipeCursosCrudComponent },
  { path: 'alterar/:id', component: EquipeCursosCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeCursosRoutingModule { }
