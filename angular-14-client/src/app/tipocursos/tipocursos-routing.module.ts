import { TipoCursosCrudComponent } from './crud/tipocursos-crud.component';
import { TipoCursosComponent } from './pages/tipocursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TipoCursosComponent, },
  { path: 'novo', component: TipoCursosCrudComponent },
  { path: 'alterar/:id', component: TipoCursosCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoCursosRoutingModule { }
