import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url ="http://localhost:3000/cita"
  constructor(private http: HttpClient) { }

  guardarCita(cita: object){
    return this.http.post<any>(this.url,cita);
  }
}