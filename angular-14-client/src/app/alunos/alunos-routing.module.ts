import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosCrudComponent } from './crud/alunos-crud.component';
import { AlunosComponent } from './pages/alunos.component';

const routes: Routes = [
  { path: '', component: AlunosComponent, },
  { path: 'novo', component: AlunosCrudComponent },
  { path: 'alterar/:id', component: AlunosCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
