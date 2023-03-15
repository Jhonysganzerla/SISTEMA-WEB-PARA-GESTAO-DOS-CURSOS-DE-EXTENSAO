import { AuthService } from './../auth/auth.service';
import { LoginService } from './../login/login.service';
import { JWTTokenService } from './../auth/jwttoken.service';
import { LocalStorageService } from './../shared/localStorageService';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private jwtService: JWTTokenService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.authService.checkIsAuthenticated();
    if (this.jwtService.getUserRa()) {
      if (this.jwtService.isTokenExpired()) {
        this.router.navigate(['/login']);
      } else {
        return true;
      }
    } else {
      return new Promise((resolve) => {
        this.router.navigate(['/login']);
      });
    }
  }
}
