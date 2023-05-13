import { AuthorizeGuard } from './guards/authorizeGuard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/adminGuard';
import { InstrutorGuard } from './guards/instrutorGuard';
import { ProfessorGuard } from './guards/professorGuard';

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
    canActivate: [AuthorizeGuard, InstrutorGuard],
  },

  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then(
        (m) => m.AlunosModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'cursosgraduacao',
    loadChildren: () =>
      import('./cursosgraduacao/cursosgraduacao.module').then(
        (m) => m.CursosGraduacaoModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'tipocursos',
    loadChildren: () =>
      import('./tipocursos/tipocursos.module').then(
        (m) => m.TipoCursosModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'turma',
    loadChildren: () =>
      import('./turmacursos/turmacursos.module').then(
        (m) => m.TurmaCursosModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'tipotransporte',
    loadChildren: () =>
      import('./tipotransporte/tipotransporte.module').then(
        (m) => m.TipoTransporteModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'equipe',
    loadChildren: () =>
      import('./equipecursos/equipecursos.module').then(
        (m) => m.EquipeCursosModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },

  {
    path: 'habilidades',
    loadChildren: () =>
      import('./habilidades/habilidades.module').then(
        (m) => m.HabilidadesModule
      ),
    canActivate: [AuthorizeGuard, ProfessorGuard],
  },
  
  {
    path: 'chamada',
    loadChildren: () =>
      import('./chamada/chamada.module').then(
        (m) => m.ChamadaModule
      ),
    canActivate: [AuthorizeGuard, InstrutorGuard],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
