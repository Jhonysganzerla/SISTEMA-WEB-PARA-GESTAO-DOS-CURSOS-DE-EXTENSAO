import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from './../habilidades.service';
import { Habilidades } from './../model/habilidades';

@Component({
  selector: 'app-habilidades-crud',
  templateUrl: './habilidades-crud.component.html',
  styleUrls: ['./habilidades-crud.component.css'],
})
export class HabilidadesCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  habilidadesId: number;
  habilidadesOptions: Array<Habilidades>;

  constructor(
    private formBuilder: FormBuilder,
    private habilidadesService: HabilidadesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.habilidadesId = +params['id'];
        this.habilidadesService.getHabilidade(this.habilidadesId).subscribe((habilidades) => {
          this.form.patchValue({
            id: habilidades.id,
            nome: habilidades.nome,
            descricao: habilidades.descricao,
          });
        });
      }
    });
  }

  onSubmit() {
    const habilidades: Habilidades = this.form.value;
    if (!this.form.valid) return;
    this.habilidadesService.save(habilidades).subscribe(() => {
      this.router.navigateByUrl('/habilidades');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/habilidades');
  }
}
