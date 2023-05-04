import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamada } from '../../model/chamada';
import { ChamadaService } from '../../chamada.service';

@Component({
  selector: 'app-chamada-crud',
  templateUrl: './chamada-crud.component.html',
  styleUrls: ['./chamada-crud.component.css'],
})
export class ChamadaCrudComponent implements OnInit {

  listaDeDatas: Set<Date>;
  listaDeChamada: Array<Chamada> = [];
  idTurma: any;

  constructor(
    private chamadaService: ChamadaService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  setData(event: any ,index: number) {
    this.listaDeChamada[index].data = event.target.value;
  }

    
  ngOnInit() {
    this.idTurma = this.route.snapshot.paramMap.get('idTurma');
    
    this.chamadaService.getChamadaParaTurma(this.idTurma).subscribe((listaDeChamada) => {
      this.listaDeChamada = listaDeChamada;
      this.listaDeDatas = new Set(listaDeChamada.map((chamada) => chamada.data));
      console.log(this.listaDeChamada)
    }
    );

    
  }

  onSubmit() {

    this.chamadaService.save(this.listaDeChamada).subscribe(() => {
      this.router.navigateByUrl('/chamada');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/chamada');
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
