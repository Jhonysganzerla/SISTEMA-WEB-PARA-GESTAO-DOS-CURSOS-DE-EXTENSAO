import { AuthService } from './auth/auth.service';
import { Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'Sistema para Controle de Cursos de Extensão';
  isAuthenticated: any;
  pesoPermissao: number = 0;

  constructor( public authService: AuthService) {
    this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;

      this.pesoPermissao = 0;

      if(this.isAdmin())
        this.pesoPermissao = 3;
      else if(this.isProfessor()){
        this.pesoPermissao = 2;
      }else if(this.isInstrutor()){
        this.pesoPermissao = 1;
      }

    });
  }

  ngOnDestroy(): void {
    this.authService.isAuthenticated.unsubscribe();
  }

  logout() {
    this.authService.handleLogout();
  }

  isAdmin(){
    return this.authService.temPermissao('ROLE_ADMIN');
  }

  isProfessor(){
    return this.authService.temPermissao('ROLE_PROFESSOR');
  }

  isInstrutor(){
    return this.authService.temPermissao('ROLE_INSTRUTOR');
  }

}
