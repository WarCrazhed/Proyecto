import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  //creacion de variables que contien la informacion del usuario
  //la variable any puede cachar cualquier cosa
  public productos:any;
  producto ={
    codigo:"",
    nombre:"",
    descripcion:"",
    existencia:"",
    precio:""
  }
   //injection en el constructor con parametros ahciendo referencia al uso de servicios
  constructor(private productoServicio:ProductoService) { }

  ngOnInit(): void {
  }

  //aqui se invocaran todos los metodos para hacerlos metodos propios del componente
  guardarProdu(){
    //no retorna info solo retorna si esta registrado el usuario
    //se invoca al servicio con el this con su metodo,recibe parametro (toda la informacion correspondiente al usuario que se quiere agregar)
    this.productoServicio.guardarProducto(this.productos).subscribe(res=>{
      alert("Producto registrado");
      this.limpiarCampos();

    },
    err => console.log(err));

  }
  modificarProdu(){
    this.productoServicio.modificarProducto(this.productos).subscribe(res =>{
      alert("Producto modificado");
      //limpieza de tabla
      this.limpiarCampos();
      //para hacer refrech
      this.consulTodoProdu();

    }, 
    err => console.log(err));

  }

  eliminarProdu(){
    //conversion de string a entero con el paseInt
    this.productoServicio.eliminarProducto(parseInt(this.productos.codigo)).subscribe(res =>{
      alert("Producto eliminado");
      this.limpiarCampos();

    },
    err => console.log(err));

  }
  consultarProdu(){
    this.productoServicio.consultaProducto(this.productos.nombre).subscribe(res =>{
      //tiene que retornar info
      this.productos = res;
    

    },
    err => console.log(err));

  }
  consulTodoProdu(){
    this.productos = this.productoServicio.consultaTodoProducto();
    
  }
  limpiarCampos(){
    this.productos =null;
      this.producto.codigo="";
      this.producto.nombre="";
      this.producto.descripcion="";
      this.producto.existencia="";
      this.producto.precio="";
  }


}
