import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AuthService} from '../services/auth.service'


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
<<<<<<< HEAD
        if (this.authService.getToken()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/home']);
        return false;
=======
             if (this.authService.getToken()) {  return true; }
             this.authService.redirectUrl = url;
            this.router.navigate(['']);
            return false;
>>>>>>> cb90a60f209b8072f19d2a903580589d3e352950
    }
}