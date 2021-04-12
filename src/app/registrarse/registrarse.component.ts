import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  usuarios:any;
  usuario={
    nombre:"",
    email:"",
    password:"",
  }
  constructor(
    private usuarioServicio: UsuarioService,
    private router: Router) { }
  guardarUsu(){
    this.usuarioServicio.guardarUsuario(this.usuario).subscribe(res=>{
      alert('Usuario Registrado');
      this.router.navigate(['/iniciarsesion']);
    },
    err => console.log(err));
  }
  ngOnInit(): void {
  }
}