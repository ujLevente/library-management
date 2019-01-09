import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
