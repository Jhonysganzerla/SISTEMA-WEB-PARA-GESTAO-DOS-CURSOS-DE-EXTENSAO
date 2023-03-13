import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: any, next: HttpHandler) {
    const token = localStorage.getItem("token");
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}