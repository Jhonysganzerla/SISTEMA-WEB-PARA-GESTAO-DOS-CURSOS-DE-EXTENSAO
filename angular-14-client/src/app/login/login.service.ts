import { UsuarioLoginDTO } from './model/usuarioLoginDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(usuarioLogin: UsuarioLoginDTO): Observable<any> {
    return this.http.post('http://localhost:8080/login', usuarioLogin);
  }

  signIncallBack(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('http://localhost:8080/users/count')
        .subscribe((data) => {
          resolve(data);
        });
    });
  }
    

 
}
