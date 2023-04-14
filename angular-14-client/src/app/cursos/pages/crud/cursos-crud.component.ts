import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../../cursos/cursos.service';
import { Cursos } from '../../model/cursos';
import { TipoCursos } from 'src/app/tipocursos/model/tipocursos';
import { TipoCursosService } from 'src/app/tipocursos/tipocursos.service';

@Component({
  selector: 'app-cursos-crud',
  templateUrl: './cursos-crud.component.html',
  styleUrls: ['./cursos-crud.component.css'],
})
export class CursosCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  cursosId: number;
  cursosTipoOptions: Array<TipoCursos>;

  constructor(
    private formBuilder: FormBuilder,
    private tipoCursosService: TipoCursosService,
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.tipoCursosService.getTipoCursos().subscribe((tipoCursos) => {
      this.cursosTipoOptions = tipoCursos;
    });
    

    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      nivel: ['',],
      conteudo: ['',],
      observacao: ['',],
      tipoCursos: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.cursosId = +params['id'];
        this.cursosService.getCurso(this.cursosId).subscribe((cursos) => {
          this.form.patchValue({
            id: cursos.id,
            nome: cursos.nome,
            descricao: cursos.descricao,
            nivel: cursos.nivel,
            conteudo: cursos.conteudo,
            observacao: cursos.observacao,
            tipoCursos: cursos.tipoCursos != null ? this.cursosTipoOptions.find(cursoGraduacao => cursoGraduacao.id === cursos.tipoCursos.id) : null,
          });
        });
      }
    });
  }

  onSubmit() {
    const cursos: Cursos = this.form.value;
    if (!this.form.valid) return;
    this.cursosService.save(cursos).subscribe(() => {
      this.router.navigateByUrl('/cursos');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/cursos');
  }
}
