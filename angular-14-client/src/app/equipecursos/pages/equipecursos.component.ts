import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/confirmDialog.component';
import { EquipeCursosService } from '../equipecursos.service';

@Component({
  selector: 'app-equipecursos',
  templateUrl: './equipecursos.component.html',
  styleUrls: ['./equipecursos.component.css']
})
export class EquipeCursosComponent implements OnInit {

  dataSource:any;
  filtro: string = '';

  constructor(private equipeCursosService: EquipeCursosService, private router:Router, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.loadTable();
  }

  displayedColumns: string[] = ['id', 'papel', 'transporte','editar', 'deletar'];


  edit(id: number) {
    this.router.navigate(['equipe/alterar/' + id]);
  }

  apagar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja deletar esse registro?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.equipeCursosService.delete(id).subscribe(() => {
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
    this.equipeCursosService.getEquipeCursos().subscribe((users: any) => {
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
