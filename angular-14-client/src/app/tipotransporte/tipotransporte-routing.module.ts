import { TipoTransporteCrudComponent } from './crud/tipotransporte-crud.component';
import { TipoTransporteComponent } from './pages/tipotransporte.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TipoTransporteComponent, },
  { path: 'novo', component: TipoTransporteCrudComponent },
  { path: 'alterar/:id', component: TipoTransporteCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoTransporteRoutingModule { }
