import { AlertifyService } from './alertify.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Photo } from '../model/photo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient, 
    private alertifyService:AlertifyService,
    private router:Router) { }
  apiUrl="https://localhost:44327/api/";
 city!:City

  getCities():Observable<City[]>{
    let newPath=this.apiUrl+"cities/getcities"
    return this.httpClient.get<City[]>(newPath)
  }

  getCityById(cityId:number):Observable<City>{
    let newPath=this.apiUrl+"cities/getcity?id="+cityId
    return this.httpClient.get<City>(newPath);
  }

  getPhotosByCityId(cityId:number):Observable<Photo[]>{
    let newPath=this.apiUrl+"cities/photos?id="+cityId;
    return this.httpClient.get<Photo[]>(newPath)
  }
  
  add(city:City){
    
    let newPath= this.apiUrl+"cities/cityadd";
    
    return this.httpClient.post(newPath,city).subscribe((data:any)=>{
      this.alertifyService.success("Şehir eklendi")
      this.router.navigateByUrl('/city-detail/'+data['id'])
    })
  }

}
