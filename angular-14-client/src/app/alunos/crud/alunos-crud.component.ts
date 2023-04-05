import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../model/alunos';

@Component({
  selector: 'app-alunos-crud',
  templateUrl: './alunos-crud.component.html',
  styleUrls: ['./alunos-crud.component.css'],
})
export class AlunosCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  alunosId: number;
  alunosOptions: Array<Aluno>;

  constructor(
    private formBuilder: FormBuilder,
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: '',
      nome: ['', Validators.required],
      telefone: ['',],
      email: ['',],
      nomeContato: ['', Validators.required],
      telefoneContato: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.alunosId = +params['id'];
        this.alunosService.getAluno(this.alunosId).subscribe((alunos) => {
          this.form.patchValue({
            id: alunos.id,
            nome: alunos.nome,
            telefone: alunos.telefone,
            email: alunos.email,
            nomeContato: alunos.nomeContato,
            telefoneContato: alunos.telefoneContato,
          });
        });
      }
    });
  }

  onSubmit() {
    const alunos: Aluno = this.form.value;
    if (!this.form.valid) return;
    this.alunosService.save(alunos).subscribe(() => {
      this.router.navigateByUrl('/alunos');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/alunos');
  }
}
