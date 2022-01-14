
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44327/api/";
  
  getCities():Observable<City[]>{
    let newPath=this.apiUrl+"cities/getcities"
    return this.httpClient.get<City[]>(newPath)
  }

  getCityById(cityId:number):Observable<City>{
    let newPath=this.apiUrl+"cities/getcity?id="+cityId
    return this.httpClient.get<City>(newPath);
  }

  getPhotosByCityId(cityId:number):Observable<Photo[]>{
    let newPath=this.apiUrl+"Cities/photos/?id="+cityId;
    return this.httpClient.get<Photo[]>(newPath)
  }

}
