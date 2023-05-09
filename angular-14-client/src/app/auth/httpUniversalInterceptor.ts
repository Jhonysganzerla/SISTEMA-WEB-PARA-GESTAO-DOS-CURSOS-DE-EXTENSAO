import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService, private router: Router) {}

  intercept(req: any, next: HttpHandler) {
    const token = localStorage.getItem('token');
    this.alertService.clear();

    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(req).pipe(
      tap(
        (event) => {
          event instanceof HttpResponse ? 'succeeded' : '';
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status == 400) {
              let errorList: Array<String> = [];
              if(error.error != undefined){
              error.error.errors.forEach((element: any) => {
                errorList.push((element.field as String).toLocaleUpperCase() + ' : ' + element.defaultMessage);
              });
              this.alertService.errorList(errorList);
            }

            }
            if (error.status === 401) {
              this.alertService.error('Acesso não autorizado');
              setTimeout(() => this.router.navigate(['/login']), 1000);
            }
            if (error.status === 403) {
              this.alertService.error(
                'Acesso não autorizado - Permissão negada'
              );
            }
            if (error.status === 500) {
              this.alertService.error(error.message);
            }
          }
        }
      )
    );
  }
}
