import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipeCursos } from './model/equipecursos';

@Injectable({
  providedIn: 'root',
})
export class EquipeCursosService {
  constructor(private http: HttpClient) {}

  rota = 'equipe';
  
  getEquipeCurso(id: any) : Observable<EquipeCursos> {
    return this.http.get<EquipeCursos>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getEquipeCursos() : Observable<EquipeCursos[]> {
    return this.http.get<EquipeCursos[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(equipecursos: EquipeCursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, equipecursos);
  }

  update(equipecursos: EquipeCursos) {
    return this.http.post(`http://localhost:8080/${this.rota}`, equipecursos);
  }
  
}
