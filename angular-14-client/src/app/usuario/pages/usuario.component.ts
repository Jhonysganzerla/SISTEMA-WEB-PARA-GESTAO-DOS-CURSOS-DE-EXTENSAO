import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../shared/confirmDialog.component';
import { UsuarioService } from './../usuario.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  dataSource:any;
  filtro: string = '';
  allowNew: boolean = true;

  constructor(private usuarioService: UsuarioService, private router:Router, public dialog: MatDialog, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.loadTable();

    this.allowNew = !this.authService.temPermissao('ROLE_INSTRUTOR');

  }

  displayedColumns: string[] = ['id', 'nome', 'email', 'ra', 'tipo', 'editar', 'deletar'];


  edit(id: number) {
    this.router.navigate(['usuario/alterar/' + id]);
  }

  apagar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja deletar esse registro?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioService.delete(id).subscribe(() => {
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
    this.usuarioService.getUsuarios().subscribe((users: any) => {
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
