import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import {FormsModule} from "@angular/forms";
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BookdetailsComponent} from "./bookdetails/bookdetails.component";
import {ServerService} from "./server.service";
import { BookSliderComponent } from './welcome-page/book-slider/book-slider.component';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BookdetailsComponent,
    AdvancesearchComponent,
    ErrorpageComponent,
    SidebarComponent,
    routingComponents,
    WelcomePageComponent,
    BookSliderComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
