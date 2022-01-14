import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Value } from '../model/value';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  apiPath="https://localhost:44327/"
  constructor(private HttpClient:HttpClient) { }


  getValues():Observable<Value[]> {
    let newPath=this.apiPath+"values"

    return this.HttpClient.get<Value[]>(newPath)

  }
}
