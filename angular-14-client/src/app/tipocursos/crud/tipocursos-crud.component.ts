import { TipoCursosService } from './../tipocursos.service';
import { TipoCursos } from './../model/tipocursos';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipocursos-crud',
  templateUrl: './tipocursos-crud.component.html',
  styleUrls: ['./tipocursos-crud.component.css'],
})
export class TipoCursosCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  tipoCursosId: number;
  tipoCursosOptions: Array<TipoCursos>;

  constructor(
    private formBuilder: FormBuilder,
    private tipoCursosService: TipoCursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: new FormControl({value: '', disabled: true}),
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.tipoCursosId = +params['id'];
        this.tipoCursosService.getTipoCurso(this.tipoCursosId).subscribe((tipocursos) => {
          this.form.patchValue({
            id: tipocursos.id,
            nome: tipocursos.nome,
            descricao: tipocursos.descricao,
          });
        });
      }
    });
  }

  onSubmit() {
    const tipocursos: TipoCursos = this.form.value;
    if (!this.form.valid) return;
    this.tipoCursosService.save(tipocursos).subscribe(() => {
      this.router.navigateByUrl('/tipocursos');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/tipocursos');
  }
}
