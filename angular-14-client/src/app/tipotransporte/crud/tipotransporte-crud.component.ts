import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoTransporte } from './../model/tipotransporte';
import { TipoTransporteService } from './../tipotransporte.service';

@Component({
  selector: 'app-tipotransporte-crud',
  templateUrl: './tipotransporte-crud.component.html',
  styleUrls: ['./tipotransporte-crud.component.css'],
})
export class TipoTransporteCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  tipotransporteId: number;
  tipotransporteOptions: Array<TipoTransporte>;

  constructor(
    private formBuilder: FormBuilder,
    private tipoTransporteService: TipoTransporteService,
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
        this.tipotransporteId = +params['id'];
        this.tipoTransporteService.getTipoTransporte(this.tipotransporteId).subscribe((tipotransporte) => {
          this.form.patchValue({
            id: tipotransporte.id,
            nome: tipotransporte.nome,
            descricao: tipotransporte.descricao,
          });
        });
      }
    });
  }

  onSubmit() {
    const tipotransporte: TipoTransporte = this.form.value;
    if (!this.form.valid) return;
    this.tipoTransporteService.save(tipotransporte).subscribe(() => {
      this.router.navigateByUrl('/tipotransporte');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/tipotransporte');
  }
}
