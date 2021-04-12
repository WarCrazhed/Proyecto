import { Component, OnInit } from '@angular/core';
import {IniciosesionService} from '../servicios/iniciosesion.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  usuario={
    email:"",
    password:""
  }
  constructor(
    private iniciosesionServicio:IniciosesionService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  login(){
    this.iniciosesionServicio.login(this.usuario).subscribe(res=>{
      console.log(res);
      localStorage.setItem('token',res);
      
      alert('Bienvenido');
      this.router.navigate(['/inicio']);
    },
      err=>{
        console.log(err);
        alert('Usuario y contraseña incorrectos')
      }

    );
  }//cierre metodo login ()
}
