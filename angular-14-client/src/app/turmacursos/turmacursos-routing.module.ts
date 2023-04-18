import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaCursosCrudComponent } from './pages/crud/turmacursos-crud.component';
import { TurmaCursosComponent } from './pages/turmacursos.component';

const routes: Routes = [
  { path: '', component: TurmaCursosComponent, },
  { path: 'novo', component: TurmaCursosCrudComponent },
  { path: 'alterar/:id', component: TurmaCursosCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaCursosRoutingModule { }
