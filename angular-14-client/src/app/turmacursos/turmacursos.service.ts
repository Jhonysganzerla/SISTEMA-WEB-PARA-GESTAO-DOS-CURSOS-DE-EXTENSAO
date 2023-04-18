import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurmaCursos } from './model/turmacursos';

@Injectable({
  providedIn: 'root',
})
export class TurmaCursosService {
  constructor(private http: HttpClient) {}

  rota = 'turma';
  
  getCurso(id: any) : Observable<TurmaCursos> {
    return this.http.get<TurmaCursos>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getTurmaCursos() : Observable<TurmaCursos[]> {
    return this.http.get<TurmaCursos[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(turmacursos: TurmaCursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, turmacursos);
  }

  update(turmacursos: TurmaCursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, turmacursos);
  }
  
}
