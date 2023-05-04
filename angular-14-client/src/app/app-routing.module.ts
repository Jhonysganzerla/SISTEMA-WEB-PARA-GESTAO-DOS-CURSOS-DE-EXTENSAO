import { AuthorizeGuard } from './guards/authorizeGuard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then((m) => m.UsuarioModule),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then(
        (m) => m.AlunosModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'cursosgraduacao',
    loadChildren: () =>
      import('./cursosgraduacao/cursosgraduacao.module').then(
        (m) => m.CursosGraduacaoModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'tipocursos',
    loadChildren: () =>
      import('./tipocursos/tipocursos.module').then(
        (m) => m.TipoCursosModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'turma',
    loadChildren: () =>
      import('./turmacursos/turmacursos.module').then(
        (m) => m.TurmaCursosModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'tipotransporte',
    loadChildren: () =>
      import('./tipotransporte/tipotransporte.module').then(
        (m) => m.TipoTransporteModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'equipe',
    loadChildren: () =>
      import('./equipecursos/equipecursos.module').then(
        (m) => m.EquipeCursosModule
      ),
    canActivate: [AuthorizeGuard],
  },

  {
    path: 'habilidades',
    loadChildren: () =>
      import('./habilidades/habilidades.module').then(
        (m) => m.HabilidadesModule
      ),
    canActivate: [AuthorizeGuard],
  },
  
  {
    path: 'chamada',
    loadChildren: () =>
      import('./chamada/chamada.module').then(
        (m) => m.ChamadaModule
      ),
    canActivate: [AuthorizeGuard],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
