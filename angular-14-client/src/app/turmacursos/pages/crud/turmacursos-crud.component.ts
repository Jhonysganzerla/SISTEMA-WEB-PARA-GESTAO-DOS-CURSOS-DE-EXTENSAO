import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/cursos/cursos.service';
import { Cursos } from 'src/app/cursos/model/cursos';
import { EquipeCursos } from 'src/app/equipecursos/model/equipecursos';
import { TurmaCursos } from '../../model/turmacursos';
import { TurmaCursosService } from '../../turmacursos.service';
import { EquipeCursosService } from './../../../equipecursos/equipecursos.service';

@Component({
  selector: 'app-turmacursos-crud',
  templateUrl: './turmacursos-crud.component.html',
  styleUrls: ['./turmacursos-crud.component.css'],
})
export class TurmaCursosCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  turmacursosId: number;
  cursosOptions: Array<Cursos>;
  equipeCursosOptions: Array<EquipeCursos>;

  constructor(
    private formBuilder: FormBuilder,
    private turmaCursosService: TurmaCursosService,
    private cursosService: CursosService,
    private equipeCursosService :EquipeCursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursosService.getCursos().subscribe((tipoCursos) => {
      this.cursosOptions = tipoCursos;
    });
    
    this.equipeCursosService.getEquipeCursos().subscribe((equipeCursos) => {
      this.equipeCursosOptions = equipeCursos;
    });


    this.form = this.formBuilder.group({
      id: [''],
      dataInicio: [''],
      dataFim: [''],
      horaInicio: [''],
      cargaHoraria: [''],
      duracao: [''],
      diaSemana: [''],
      local: [''],
      sala: [''],
      requisitos: [''],
      equipeCursos: ['', Validators.required],
      cursos: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.turmacursosId = +params['id'];
        this.turmaCursosService.getCurso(this.turmacursosId).subscribe((turmacursos) => {
          this.form.patchValue({
            id: turmacursos.id,
            dataInicio: turmacursos.dataInicio,            
            dataFim: turmacursos.dataFim,
            horaInicio: turmacursos.horaInicio,
            cargaHoraria: turmacursos.cargaHoraria,
            duracao: turmacursos.duracao,
            diaSemana: turmacursos.diaSemana,
            local: turmacursos.local,
            sala: turmacursos.sala,
            requisitos: turmacursos.requisitos,
            equipeCursos: turmacursos.equipeCursos != null ? this.equipeCursosOptions.find(equipe => equipe.id === turmacursos.equipeCursos.id) : null,
            cursos: turmacursos.cursos != null ? this.cursosOptions.find(cursoGraduacao => cursoGraduacao.id === turmacursos.cursos.id) : null,
          });
        });
      }
    });
  }

  onSubmit() {
    const turmacursos: TurmaCursos = this.form.value;
    if (!this.form.valid) return;
    this.turmaCursosService.save(turmacursos).subscribe(() => {
      this.router.navigateByUrl('/turmacursos');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/turmacursos');
  }
}
