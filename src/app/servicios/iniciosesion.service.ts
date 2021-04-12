import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  private url = "http://localhost:3000/usuarios/iniciosesion";
  constructor(
  private http:HttpClient,
  private router: Router) { }

  login(usuario:any){
    return this.http.post<any>(this.url,usuario);
  }
  eslogueado(){
    return !!localStorage.getItem('token');
  }//cierre de eslogueado
  //esCliente(){
    //return !!localStorage.getItem('cliente');
  //}//cierre de esCliente
  //esEmpleado(){
    //return !!localStorage.getItem('empleado');
  //}//cierre de esEmpleado
  cerrarSesion(){
    //localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/inicio']);
  }//cierre de cerrarSesion

  get token(): string {
    return localStorage.getItem('token') || '';
  }

}
