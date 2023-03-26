import { UsuarioCrudComponent } from './pages/crud/usuario-crud.component';
import { UsuarioComponent } from './pages/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsuarioComponent, },
  { path: 'novo', component: UsuarioCrudComponent },
  { path: 'alterar/:id', component: UsuarioCrudComponent },
  
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
