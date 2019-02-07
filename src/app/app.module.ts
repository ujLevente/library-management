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
import {ServerService} from "./shared/service/server.service";
import { BookSliderComponent } from './welcome-page/book-slider/book-slider.component';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { SearchResultComponent } from './search-result/search-result.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {PmComponent} from './auth/pm/pm.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import {RoleGuardService as RoleGuard} from './auth/role-guard.service';
import { NopermissionComponent } from './auth/nopermission/nopermission.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {MatFormFieldModule, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

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
    SearchResultComponent,
    BookSliderComponent,
    WishlistComponent,
  //  AUTH
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    NopermissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule
  ],
  providers: [ServerService, AuthGuard, RoleGuard, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
