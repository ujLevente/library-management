import {AdvancesearchComponent} from "./advancesearch/advancesearch.component";
import {SearchresultComponent} from "./searchresult/searchresult.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookdetailsComponent} from './bookdetails/bookdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancesearchComponent } from "./advancesearch/advancesearch.component";
import { SearchresultComponent } from "./searchresult/searchresult.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'book/:olId', component: BookdetailsComponent},
  {path: 'advancesearch', component: AdvancesearchComponent},
  {path: 'search-result', component: SearchresultComponent},
  {path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [LoginComponent,
                                  RegistrationComponent,
                                  AdvancesearchComponent,
                                  SearchresultComponent,
                                  ErrorpageComponent];
