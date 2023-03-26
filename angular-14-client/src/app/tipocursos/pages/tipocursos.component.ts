import { TipoCursosService } from '../tipocursos.service';
import { ConfirmDialogComponent } from '../../shared/confirmDialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipocursos',
  templateUrl: './tipocursos.component.html',
  styleUrls: ['./tipocursos.component.css']
})
export class TipoCursosComponent implements OnInit {

  dataSource:any;
  filtro: string = '';

  constructor(private tipocursosService: TipoCursosService, private router:Router, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.loadTable();
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'editar', 'deletar'];


  edit(id: number) {
    this.router.navigate(['tipocursos/alterar/' + id]);
  }

  apagar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja deletar esse registro?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tipocursosService.delete(id).subscribe(() => {
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
    this.tipocursosService.getTipoCursos().subscribe((users: any) => {
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
