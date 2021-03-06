import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent , LoginDialog} from './auth/login.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatCardModule, MatDialog, MatNativeDateModule, MatInputModule, MatFormFieldModule} from '@angular/material';

import { MatDialogModule} from '@angular/material';
import {AuthGuard} from './services/auth-guard.service'
import {AuthService} from './services/auth.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';

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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginDialog,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,

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
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,

   MatInputModule,
    MatNativeDateModule,
   MatFormFieldModule
  ],
  providers: [AuthService,AuthGuard,ToasterService],
  bootstrap: [AppComponent],
   entryComponents: [LoginDialog]
})
export class AppModule { }
