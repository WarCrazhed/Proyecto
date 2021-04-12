import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //la ruta raiz que lleva la URL es especifica para el objeto usuario
  private url = "http://localhost:3000/productos";

  constructor(private http:HttpClient) { }

  //crear metodo con return para obligarlo a que devuelva cualquier cosa y se pueda cachar en cualquier variable tipo any 
  guardarProducto(producto: object){
    //dentro del parentesis lleva la ruta que se hara uso
    return this.http.post<any>(this.url,producto);
  }

  modificarProducto(producto: object){
    return this.http.put<any>(this.url,producto);
  }
  //el parametro que lleva es de tipo numerico y se realizara un parceo
  eliminarProducto(codigo: number){
    //aqui no lleva una coma ya que no necesita mandarlo como un body/en express se mando como variable y se debe de respetar creando la URL con parametro haciendo uso de la concatenacion
    return this.http.delete<any>(this.url + "/" + codigo);
  }
  consultaTodoProducto(){
    return this.http.get<any>(this.url);
  }

  consultaProducto(nombre:String){
    return this.http.get<any>(this.url + "/" + nombre);
  }

}