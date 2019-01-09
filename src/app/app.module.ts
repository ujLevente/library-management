import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
