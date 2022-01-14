import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './component/value/value.component';
import { NavComponent } from './component/nav/nav.component';
import { CityComponent } from './component/city/city.component';
import { CityDetailComponent } from './component/city-detail/city-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxGalleryModule,
    BrowserAnimationsModule
    
   
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
