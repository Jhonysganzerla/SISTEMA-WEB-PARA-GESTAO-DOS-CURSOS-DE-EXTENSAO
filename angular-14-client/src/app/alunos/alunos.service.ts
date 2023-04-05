import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './model/alunos';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  constructor(private http: HttpClient) {}

  rota = 'alunos';
  
  getAluno(id: any) : Observable<Aluno> {
    return this.http.get<Aluno>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getAlunos() : Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(alunos: Aluno) {
    return this.http.post(`http://localhost:8080/${this.rota}`, alunos);
  }

  update(alunos: Aluno) {
    return this.http.post(`http://localhost:8080/${this.rota}`, alunos);
  }
  
}
