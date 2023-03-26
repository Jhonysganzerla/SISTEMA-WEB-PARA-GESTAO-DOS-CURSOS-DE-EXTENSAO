import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from './model/habilidades';

@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  constructor(private http: HttpClient) {}

  rota = 'habilidades';
  
  getHabilidade(id: any) : Observable<Habilidades> {
    return this.http.get<Habilidades>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getHabilidades() : Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(habilidades: Habilidades) {
    return this.http.post(`http://localhost:8080/${this.rota}`, habilidades);
  }

  update(habilidades: Habilidades) {
    return this.http.post(`http://localhost:8080/${this.rota}`, habilidades);
  }
  
}
