import { AuthService } from './auth/auth.service';
import { Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'sistema-controle-cursos-extensao';
  isAuthenticated: any;

  constructor( public authService: AuthService) {
     this.authService.isAuthenticated.subscribe(
      (data) => this.isAuthenticated = data
    )
  }

  ngOnDestroy(): void {
    this.authService.isAuthenticated.unsubscribe();
  }

  logout() {
    this.authService.handleLogout();
  }

}
