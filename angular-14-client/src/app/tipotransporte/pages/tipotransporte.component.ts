import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/confirmDialog.component';
import { TipoTransporteService } from './../tipotransporte.service';

@Component({
  selector: 'app-tipotransporte',
  templateUrl: './tipotransporte.component.html',
  styleUrls: ['./tipotransporte.component.css']
})
export class TipoTransporteComponent implements OnInit {

  dataSource:any;
  filtro: string = '';

  constructor(private tipoTransporteService: TipoTransporteService, private router:Router, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.loadTable();
  }

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'editar', 'deletar'];


  edit(id: number) {
    this.router.navigate(['tipotransporte/alterar/' + id]);
  }

  apagar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja deletar esse registro?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tipoTransporteService.delete(id).subscribe(() => {
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
    this.tipoTransporteService.getTipoTransportes().subscribe((users: any) => {
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
