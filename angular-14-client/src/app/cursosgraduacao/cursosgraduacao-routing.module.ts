import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosGraduacaoCrudComponent } from './pages/crud/cursosgraduacao-crud.component';
import { CursosGraduacaoComponent } from './pages/cursosgraduacao.component';

const routes: Routes = [
  { path: '', component: CursosGraduacaoComponent, },
  { path: 'novo', component: CursosGraduacaoCrudComponent },
  { path: 'alterar/:id', component: CursosGraduacaoCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosGraduacaoRoutingModule { }
