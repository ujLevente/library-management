import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private token: TokenStorageService) {}

  canActivate(): boolean {
    if (!this.token.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
