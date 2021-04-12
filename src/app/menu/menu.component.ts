import { Component, OnInit } from '@angular/core';
import { IniciosesionService } from '../servicios/iniciosesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public iniciosesionServicio: IniciosesionService) { }

  ngOnInit(): void {
  }

}
