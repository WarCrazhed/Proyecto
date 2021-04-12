import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//PROTOCOLO HTTP
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//COMPONENTES
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AgendarcitaComponent } from './agendarcita/agendarcita.component';
import { MivehiculoComponent } from './mivehiculo/mivehiculo.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ProductosComponent } from './productos/productos.component';

//SERVICIOS
import { IniciosesionService } from "./servicios/iniciosesion.service";

//OTROS IMPORT
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ServicioComponent,
    NosotrosComponent,
    ContactoComponent,
    IniciarsesionComponent,
    AgendarcitaComponent,
    MivehiculoComponent,
    RegistrarseComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    IniciosesionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
