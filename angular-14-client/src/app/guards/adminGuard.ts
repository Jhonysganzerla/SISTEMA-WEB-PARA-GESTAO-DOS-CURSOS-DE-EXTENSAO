import { AuthService } from '../auth/auth.service';
import { LoginService } from '../login/login.service';
import { JWTTokenService } from '../auth/jwttoken.service';
import { LocalStorageService } from '../shared/localStorageService';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private jwtService: JWTTokenService,
    private alertService : AlertService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    if(this.authService.temPermissao('ROLE_ADMIN')){
     return
    } else {
      this.alertService.errorList(['Você não tem permissão para acessar essa página']);
      this.router.navigate(['/home']);
    }
  }
}
