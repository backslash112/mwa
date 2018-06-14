import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmersMarketGuard implements CanActivate {
  
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (state.url.split('/').length < 4) {
       console.log('error!')
       this.router.navigate(['/error']);
        return false;
      }
    return true;
  }
}
