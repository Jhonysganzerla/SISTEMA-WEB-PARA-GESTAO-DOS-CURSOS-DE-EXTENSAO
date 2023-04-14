import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosCrudComponent } from './pages/crud/cursos-crud.component';
import { CursosComponent } from './pages/cursos.component';

const routes: Routes = [
  { path: '', component: CursosComponent, },
  { path: 'novo', component: CursosCrudComponent },
  { path: 'alterar/:id', component: CursosCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
