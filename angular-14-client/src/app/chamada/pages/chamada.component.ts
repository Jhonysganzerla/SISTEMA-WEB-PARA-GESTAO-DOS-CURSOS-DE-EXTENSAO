import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/confirmDialog.component';
import { TurmaCursosService } from 'src/app/turmacursos/turmacursos.service';

@Component({
  selector: 'app-chamada',
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.css']
})
export class ChamadaComponent implements OnInit {

  dataSource:any;
  filtro: string = '';

  constructor(private turmacursosService: TurmaCursosService, private router:Router, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.loadTable();
  }

  displayedColumns: string[] = ['abrir', 'id', 'curso','dataInicio', 'diaSemana', 'local',];


  edit(id: number) {
    this.router.navigate(['chamada/alterar/' + id]);
  }


  applyFilter(filterValue: string) {
    this.filtro = filterValue;
    this.loadTable();
  }

  
  loadTable() {
    this.turmacursosService.getTurmaCursos().subscribe((users: any) => {
      this.dataSource = users.filter((item: any) => {
        return this.displayedColumns.some((key) => {
          item[key] = item[key] == null ? '' : item[key];
          return item[key]
            .toString()
            .toLowerCase()
            .includes(this.filtro.toLowerCase());
        });
      });
    })
  }
}
