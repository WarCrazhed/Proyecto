import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { AgendarcitaComponent } from './agendarcita/agendarcita.component';
import { MivehiculoComponent } from './mivehiculo/mivehiculo.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ProductosComponent } from './productos/productos.component';
//lista de guardias
import{GuardiamenuGuard} from './guardia/guardiamenu.guard';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "menu", component: MenuComponent},
  {path: "inicio", component: InicioComponent},
  {path: "servicio", component: ServicioComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "iniciarsesion", component: IniciarsesionComponent},
  {path: "agendacita", component: AgendarcitaComponent, canActivate:[GuardiamenuGuard]},
  {path: "mivehiculo", component: MivehiculoComponent, canActivate:[GuardiamenuGuard]},
  {path: "registrarse", component: RegistrarseComponent},
  {path: "productos", component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
