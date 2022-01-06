import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('in the guard');
    return this.checkLoadModule();
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('in the guard');

    return this.checkLoadModule();
  }

  // auth logic
  private checkLoadModule() {
    return true;
  }
}
