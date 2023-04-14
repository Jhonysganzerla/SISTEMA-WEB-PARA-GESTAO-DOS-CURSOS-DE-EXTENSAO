import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from './model/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}

  rota = 'cursos';
  
  getCurso(id: any) : Observable<Cursos> {
    return this.http.get<Cursos>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getCursos() : Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(cursos: Cursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, cursos);
  }

  update(cursos: Cursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, cursos);
  }
  
}
