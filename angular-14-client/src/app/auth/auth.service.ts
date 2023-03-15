import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JWTTokenService } from './jwttoken.service';
import { LocalStorageService } from './../shared/localStorageService';
import { AuthenticatedUser } from './model/authenticatedUser';
import { AuthenticationResponse } from './model/authenticationResponse';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated: boolean = false;
  authenticatedUser: AuthenticatedUser | undefined;
  isAuthenticated: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private jwtService: JWTTokenService
  ) {}

  handleLogout() {
    this.authenticated = false;
    this.authenticatedUser = undefined;
    this.localStorageService.remove('token');
    this.localStorageService.remove('user');
    this.router.navigate(['/login']);
    this.emitAuthenticated();
  }

  handleLogin(response: AuthenticationResponse) {
    this.localStorageService.set('token', response.token);
    this.localStorageService.set('user', JSON.stringify(response.user));

    this.jwtService.setToken(response['token']);

    this.authenticatedUser = response.user;
    this.authenticated = true;
    this.emitAuthenticated();
  }

  checkIsAuthenticated() {
    if (
      this.localStorageService.get('token') &&
      this.localStorageService.get('user')
    ) {
      const user = JSON.parse(this.localStorageService.get('user') || '{}');

      this.authenticatedUser = user;
      this.authenticated = true;
    }
    this.emitAuthenticated();
  }

  emitAuthenticated() {
    this.isAuthenticated.emit(this.authenticated && this.authenticatedUser != undefined);
  }
}
