import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoTurmaCurso } from './model/alunoturmacurso';
import { TurmaCursos } from '../turmacursos/model/turmacursos';

@Injectable({
  providedIn: 'root',
})
export class AlunoTurmaCursoService {
  constructor(private http: HttpClient) {}

  rota = 'alunoturmacurso';

    
  getTurmasFromAluno(idAluno: any) : Observable<TurmaCursos[]> {
    return this.http.get<TurmaCursos[]>(`http://localhost:8080/${this.rota}/getTurmasAluno/${idAluno}`);
  }
  
  getAlunoTurmaCurso(id: any) : Observable<AlunoTurmaCurso> {
    return this.http.get<AlunoTurmaCurso>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getAlunoTurmaCursos() : Observable<AlunoTurmaCurso[]> {
    return this.http.get<AlunoTurmaCurso[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(alunos: AlunoTurmaCurso) {
    return this.http.post(`http://localhost:8080/${this.rota}`, alunos);
  }

  update(alunos: AlunoTurmaCurso) {
    return this.http.post(`http://localhost:8080/${this.rota}`, alunos);
  }
  
}
