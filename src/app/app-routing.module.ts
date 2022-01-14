import { CityDetailComponent } from './component/city-detail/city-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './component/city/city.component';
import { ValueComponent } from './component/value/value.component';

const routes: Routes = [
  {path:"",pathMatch:"full", redirectTo:"city"},
  {path:"value",component:ValueComponent},
  {path:"city",component:CityComponent},
  {path:"city-detail/:cityId",component:CityDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
