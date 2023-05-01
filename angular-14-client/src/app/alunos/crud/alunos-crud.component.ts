import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AlunoTurmaCursoService } from 'src/app/alunoturmacurso/alunoturmacurso.service';
import { TurmaCursos } from 'src/app/turmacursos/model/turmacursos';
import { TurmaCursosService } from 'src/app/turmacursos/turmacursos.service';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../model/alunos';
import { AlunoTurmaCurso } from 'src/app/alunoturmacurso/model/alunoturmacurso';

@Component({
  selector: 'app-alunos-crud',
  templateUrl: './alunos-crud.component.html',
  styleUrls: ['./alunos-crud.component.css'],
})
export class AlunosCrudComponent implements OnInit {
  form: FormGroup;
  lstTurmaCursos: Array<TurmaCursos> = [];

  isNew: boolean = true;
  alunosId: number;
  turmasOptions: Array<TurmaCursos>;

  constructor(
    private formBuilder: FormBuilder,
    private alunosService: AlunosService,
    private turmaCursosService: TurmaCursosService,
    private alunoTurmaCursoService: AlunoTurmaCursoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.turmaCursosService.getTurmaCursos().subscribe((turmas) => {
      this.turmasOptions = turmas;
    });

    this.form = this.formBuilder.group({
      id: '',
      nome: ['', Validators.required],
      telefone: [''],
      email: [''],
      nomeContato: ['', Validators.required],
      telefoneContato: ['', Validators.required],
      lstTurmaCursos: [[]],
    });

    this.route.params.subscribe(async (params) => {
      if (params['id']) {
        this.isNew = false;
        this.alunosId = +params['id'];
        this.alunosService.getAluno(this.alunosId).subscribe(async (alunos) => {
          this.setTurmasFromAluno(this.alunosId);
          this.form.patchValue({
            id: alunos.id,
            nome: alunos.nome,
            telefone: alunos.telefone,
            email: alunos.email,
            nomeContato: alunos.nomeContato,
            telefoneContato: alunos.telefoneContato,
            lstTurmaCursos: this.lstTurmaCursos,
          });
        });
      }
    });
  }

  onSubmit() {
    const alunoSave: Aluno = this.form.value;

    alunoSave.lstTurmaCursos = this.lstTurmaCursos;

    console.log(alunoSave.lstTurmaCursos);

    if (!this.form.valid) return;
    this.alunosService.save(alunoSave).subscribe(() => {
      this.router.navigateByUrl('/alunos');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/alunos');
  }

  async setTurmasFromAluno(alunoId: Number) {
    this.alunoTurmaCursoService
      .getTurmasFromAluno(alunoId)
      .toPromise()
      .then((turmasCursos) => {
        if (turmasCursos == null) return;
        this.lstTurmaCursos = turmasCursos;
      });
  }

  removeTurmaCurso(index: number) {
    this.lstTurmaCursos.splice(index, 1);
  }

  addTurmaCurso() {
    this.lstTurmaCursos.push(new TurmaCursos());
  }
}
