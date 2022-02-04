
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './component/value/value.component';
import { NavComponent } from './component/nav/nav.component';
import { CityComponent } from './component/city/city.component';
import { CityDetailComponent } from './component/city-detail/city-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityAddComponent } from './component/city-add/city-add.component';
import { LoginComponent } from './component/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,
    LoginComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
