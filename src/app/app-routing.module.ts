import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookdetailsComponent} from './bookdetails/bookdetails.component';

const routes: Routes = [
  {path: 'book', component: BookdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
