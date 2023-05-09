import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamada } from './model/chamada';

@Injectable({
  providedIn: 'root',
})
export class ChamadaService {
  constructor(private http: HttpClient) {}

  rota = 'chamada';
  
  getChamadaParaTurma(idTurma: any) : Observable<Chamada[]> {
    return this.http.get<Chamada[]>(`http://localhost:8080/${this.rota}/getChamadaFromTurma/${idTurma}`);
  }

  save(chamada: Chamada[]) {
    return this.http.post(`http://localhost:8080/${this.rota}/saveChamada`, chamada);
  }

}
