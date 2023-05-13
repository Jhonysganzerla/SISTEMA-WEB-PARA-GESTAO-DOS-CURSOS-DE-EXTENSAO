import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/confirmDialog.component';
import { TurmaCursosService as TurmaCursosService } from "../turmacursos.service";

@Component({
  selector: 'app-turmacursos',
  templateUrl: './turmacursos.component.html',
  styleUrls: ['./turmacursos.component.css']
})
export class TurmaCursosComponent implements OnInit {

  dataSource:any;
  filtro: string = '';

  constructor(private turmacursosService: TurmaCursosService, private router:Router, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.loadTable();
  }

  displayedColumns: string[] = ['id','cursos', 'dataInicio', 'diaSemana', 'local',  'editar', 'deletar'];


  edit(id: number) {
    this.router.navigate(['turma/alterar/' + id]);
  }

  apagar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja deletar esse registro?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.turmacursosService.delete(id).subscribe(() => {
          this.loadTable();
        })
      }
    });
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
