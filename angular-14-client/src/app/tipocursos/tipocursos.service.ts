import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCursos } from './model/tipocursos';

@Injectable({
  providedIn: 'root',
})
export class TipoCursosService {
  constructor(private http: HttpClient) {}

  rota = 'tipocursos';
  
  getTipoCurso(id: any) : Observable<TipoCursos> {
    return this.http.get<TipoCursos>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getTipoCursos() : Observable<TipoCursos[]> {
    return this.http.get<TipoCursos[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(tipocursos: TipoCursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, tipocursos);
  }

  update(tipocursos: TipoCursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, tipocursos);
  }
  
}
