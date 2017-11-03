import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {AuthGuard} from './services/auth-guard.service'
import {AuthService} from './services/auth.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {MaterialModule} from './material.module'; 
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Routes,
    RouterModule,
    PreloadAllModules
} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignDialogComponent } from './dialogs/sign-dialog/sign-dialog.component';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { SearchComponent } from './home/search/search.component';
import { InfoComponent } from './home/info/info.component';


import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    SignDialogComponent,
    LoginDialogComponent,
    SearchComponent,
    InfoComponent

  ],
  imports: [
    ToasterModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [AuthService,AuthGuard,ToasterService],
  bootstrap: [AppComponent],
   entryComponents: [LoginDialogComponent, SignDialogComponent]
})
export class AppModule { }
