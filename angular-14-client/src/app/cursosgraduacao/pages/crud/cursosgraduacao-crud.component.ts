import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosGraduacao } from '../../model/cursosgraduacao';
import { CursosGraduacaoService } from './../../../cursosgraduacao/cursosgraduacao.service';

@Component({
  selector: 'app-cursosgraduacao-crud',
  templateUrl: './cursosgraduacao-crud.component.html',
  styleUrls: ['./cursosgraduacao-crud.component.css'],
})
export class CursosGraduacaoCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  cursosgraduacaoId: number;
  cursosGraduacaoOptions: Array<CursosGraduacao>;

  constructor(
    private formBuilder: FormBuilder,
    private cursosGraduacaoService: CursosGraduacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursosGraduacaoService.getCursosGraduacao().subscribe((cursos) => {
      this.cursosGraduacaoOptions = cursos;
    });

    this.form = this.formBuilder.group({
      id: new FormControl({value: '', disabled: true}),
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.cursosgraduacaoId = +params['id'];
        this.cursosGraduacaoService.getCursoGraduacao(this.cursosgraduacaoId).subscribe((cursosgraduacao) => {
          this.form.patchValue({
            id: cursosgraduacao.id,
            nome: cursosgraduacao.nome,
            descricao: cursosgraduacao.descricao,
          });
        });
      }
    });
  }

  onSubmit() {
    const cursosgraduacao: CursosGraduacao = this.form.value;
    if (!this.form.valid) return;
    this.cursosGraduacaoService.save(cursosgraduacao).subscribe(() => {
      this.router.navigateByUrl('/cursosgraduacao');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/cursosgraduacao');
  }
}
