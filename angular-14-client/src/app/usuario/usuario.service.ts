import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  rota = 'users';
  
  getUsuario(id: any) : Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(usuario: Usuario) {
    return this.http.post(`http://localhost:8080/${this.rota}`, usuario);
  }

  update(usuario: Usuario) {
    return this.http.post(`http://localhost:8080/${this.rota}`, usuario);
  }
  
}
