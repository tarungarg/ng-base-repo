import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 *  Authentication Logic
 */
@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  initializeApp() {
    console.log('in the auth');
    this.router.navigateByUrl('/home');

    return true;
  }
}
