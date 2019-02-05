import {Injectable} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private token: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    console.log('expectedrole: ' + expectedRole);
    console.log('hasrole: ' + this.hasRole(expectedRole));

    if (!this.token.isAuthenticated() || !this.hasRole(expectedRole)) {
      this.router.navigate(['nopermission']);
      return false;
    }
    return true;
  }

  private hasRole(expectedRole) {
    return this.token.getAuthorities().indexOf(expectedRole) !== -1;
  }
}
