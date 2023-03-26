import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosGraduacao } from './model/cursosgraduacao';

@Injectable({
  providedIn: 'root',
})
export class CursosGraduacaoService {
  constructor(private http: HttpClient) {}

  rota = 'cursosgraduacao';
  
  getCursoGraduacao(id: any) : Observable<CursosGraduacao> {
    return this.http.get<CursosGraduacao>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getCursosGraduacao() : Observable<CursosGraduacao[]> {
    return this.http.get<CursosGraduacao[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(cursosgraduacao: CursosGraduacao) {
    return this.http.post(`http://localhost:8080/${this.rota}`, cursosgraduacao);
  }

  update(cursosgraduacao: CursosGraduacao) {
    return this.http.post(`http://localhost:8080/${this.rota}`, cursosgraduacao);
  }
  
}
