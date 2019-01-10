import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvancesearchComponent} from "./advancesearch/advancesearch.component";
import {SearchresultComponent} from "./searchresult/searchresult.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";

const routes: Routes = [
  {path: 'advancesearch', component: AdvancesearchComponent},
  {path: 'search-result', component: SearchresultComponent},
  {path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
