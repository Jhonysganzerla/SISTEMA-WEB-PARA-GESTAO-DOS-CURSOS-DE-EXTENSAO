import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashContent } from './model/dashcontent';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  rota = 'home';
  
  getDashContent() : Observable<DashContent> {
    return this.http.get<DashContent>(`http://localhost:8080/${this.rota}`);
  }

}
