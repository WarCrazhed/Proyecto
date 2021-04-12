import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IniciosesionService } from '../servicios/iniciosesion.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardiamenuGuard implements CanActivate {
  constructor (
    private iniciosesionServicio: IniciosesionService,
    private router : Router
    ){  
  }
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  canActivate() : boolean {
    if (this.iniciosesionServicio.eslogueado()){
    return true;
    }else{
      this.router.navigate(['/iniciarsesion']);
      return false;
    }
  }
}
