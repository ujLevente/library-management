import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvancesearchComponent} from "./advancesearch/advancesearch.component";

const routes: Routes = [
  {path: 'advancesearch', component: AdvancesearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
