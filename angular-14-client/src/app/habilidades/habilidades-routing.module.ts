import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesCrudComponent } from './crud/habilidades-crud.component';
import { HabilidadesComponent } from './pages/habilidades.component';

const routes: Routes = [
  { path: '', component: HabilidadesComponent, },
  { path: 'novo', component: HabilidadesCrudComponent },
  { path: 'alterar/:id', component: HabilidadesCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilidadesRoutingModule { }
