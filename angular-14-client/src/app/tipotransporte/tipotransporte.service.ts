import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoTransporte } from './model/tipotransporte';

@Injectable({
  providedIn: 'root',
})
export class TipoTransporteService {
  constructor(private http: HttpClient) {}

  rota = 'tipotransporte';
  
  getTipoTransporte(id: any) : Observable<TipoTransporte> {
    return this.http.get<TipoTransporte>(`http://localhost:8080/${this.rota}/${id}`);
  }

  getTipoTransportes() : Observable<TipoTransporte[]> {
    return this.http.get<TipoTransporte[]>(`http://localhost:8080/${this.rota}`);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/${this.rota}/${id}`);
  }

  save(tipoTransporte: TipoTransporte) {
    return this.http.post(`http://localhost:8080/${this.rota}`, tipoTransporte);
  }

  update(tipoTransporte: TipoTransporte) {
    return this.http.post(`http://localhost:8080/${this.rota}`, tipoTransporte);
  }
  
}
