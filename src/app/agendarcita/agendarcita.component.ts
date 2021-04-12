import { Component, OnInit } from '@angular/core';
import {CitaService} from '../servicios/cita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendarcita',
  templateUrl: './agendarcita.component.html',
  styleUrls: ['../inicio/inicio.component.css']
})
export class AgendarcitaComponent implements OnInit {
  citas:any;
  cita={
    fecha:"",
    hora:"",
    servicio:"",
    observaciones:"",
  }
  constructor(
    private CitaServicio:CitaService,
    private router: Router) { }
    guardarC(){
      this.CitaServicio.guardarCita(this.cita).subscribe(res=>{
        alert('Cita Registrada');
        this.router.navigate(['citas']);
      },
      err => console.log(err));
    }

  ngOnInit(): void {
  }

}
