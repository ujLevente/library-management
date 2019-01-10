import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from "@angular/router";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  }
];
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import {Routes} from '@angular/router';
import {ServerService} from './server.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BookdetailsComponent
    SidebarComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
