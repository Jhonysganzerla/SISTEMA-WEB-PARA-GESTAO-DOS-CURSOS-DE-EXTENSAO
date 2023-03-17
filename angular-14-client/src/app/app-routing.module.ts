import { AuthorizeGuard } from './guards/authorizeGuard.guard';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/pages/login.component';
import { HomeComponent } from './home/pages/home.component';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthorizeGuard]
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
