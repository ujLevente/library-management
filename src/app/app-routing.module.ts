import {AdvancesearchComponent} from './advancesearch/advancesearch.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookdetailsComponent} from './bookdetails/bookdetails.component';
import {SearchresultComponent} from './searchresult/searchresult.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
import {LoginComponent} from './auth/login/login.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminComponent} from './admin/admin.component';
import {PmComponent} from './auth/pm/pm.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';

import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import {RoleGuardService as RoleGuard} from './auth/role-guard.service';
import {NopermissionComponent} from './auth/nopermission/nopermission.component';

const routes: Routes = [
  {path: 'nopermission', component: NopermissionComponent},
  {path: 'book/:olId', component: BookdetailsComponent},
  {path: 'advancesearch', component: AdvancesearchComponent},
  {path: 'index', component: WelcomePageComponent},
  {path: 'search-result', component: SearchresultComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'wishlist', component: WishlistComponent},
  // {path: '**', component: ErrorpageComponent},
//   AUTH
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_ADMIN'
    },
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routingComponents = [LoginComponent,
  AdvancesearchComponent,
  SearchresultComponent,
  ErrorpageComponent,
  RegisterComponent,
  LoginComponent];
