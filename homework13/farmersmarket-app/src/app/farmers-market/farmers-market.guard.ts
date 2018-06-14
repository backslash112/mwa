import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class FarmersMarketGuard implements CanActivate {
  
  constructor(private router: Router, private dbService: DbService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
      console.log('check...')
      // state.url.split('/').length < 4 || 
      if (this.dbService.getDataById(Number(state.url.split('/')[state.url.split('/').length-1])) == null) {
       console.log('error!')
       this.router.navigate(['/error']);
        return false;
      }
    return true;
  }
}
