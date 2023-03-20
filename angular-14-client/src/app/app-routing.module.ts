import { AuthorizeGuard } from './guards/authorizeGuard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthorizeGuard]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
