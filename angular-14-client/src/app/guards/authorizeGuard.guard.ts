import { LoginService } from './../login/login.service';
import { JWTTokenService } from './../auth/jwttoken.service';
import { LocalStorageService } from './../shared/localStorageService';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private loginService: LoginService,
              private router : Router,
              private jwtService: JWTTokenService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

      console.log(this.jwtService.getUserRa())
      if (this.jwtService.getUserRa()) {
          if (this.jwtService.isTokenExpired()) {
              this.router.navigate(['/login']);
          } else {
            return true;
          }
      } else {
        return new Promise((resolve) => {
          this.loginService.signIncallBack().then((e) => {
             resolve(true);
          }).catch((e) => {
            this.router.navigate(['/login']);
          });
        });
      }
  }
}