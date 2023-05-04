import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadaComponent } from './pages/chamada.component';
import { ChamadaCrudComponent } from './pages/crud/chamada-crud.component';

const routes: Routes = [
  { path: '', component: ChamadaComponent, },
  { path: 'novo', component: ChamadaCrudComponent },
  { path: 'alterar/:idTurma', component: ChamadaCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadaRoutingModule { }
