import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private router: Router,
    private localStorageService:LocalStorageService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (!state.url.includes('login')) {
      if (this.loginToken()) {
        return true;
      } else {
        this.router.navigate(['login'])
        return false;
      }
    } else {
      if (this.loginToken()) {
        this.router.navigate(['dashboard'])
        return false;
      } else {
        return true;
      }
    }
    
  }

  loginToken() {
    return this.localStorageService.getToken();
  }
  
}
