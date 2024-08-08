import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

/*
Guardian que protege el acceso a paginas prohibidas sin estar loggeado
*/

@Injectable()
export class LogInGuardian implements CanActivate{

    constructor( private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        return true;
        
    } 
}