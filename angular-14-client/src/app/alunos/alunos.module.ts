import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './pages/alunos.component';
import { AlunosService } from './alunos.service';
import { AlunosCrudComponent } from './crud/alunos-crud.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TelefoneMaskDirective } from '../shared/telefoneMask.directive';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunosCrudComponent,
    TelefoneMaskDirective,

  ],
  providers: [
    AlunosService,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    AlunosRoutingModule,
  ]
})
export class AlunosModule { }
