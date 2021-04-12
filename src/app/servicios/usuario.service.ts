import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url ="http://localhost:3000/usuarios"
  constructor(private http: HttpClient) { }

  guardarUsuario(usuario: object){
    return this.http.post<any>(this.url,usuario);
  }
  modificarUsuario(usuario:object){
    return this.http.put<any>(this.url,usuario);
  }
  eliminarUsuario(codigo: number){
    return this.http.delete<any>(this.url + "/" + codigo);
  }
  consultartodoUsu(){
    return this.http.get<any>(this.url);
  }
  consultarUsuario(nombre: String){
    return this.http.get<any>(this.url + "/" + nombre);
  }
}
