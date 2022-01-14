import { Photo } from './../../model/photo';
import { CityService } from './../../service/city.service';
import { City } from './../../model/city';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private cityService: CityService,
  ) { }

    
  city!: City;
  photos:Photo[]=[]
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"])
      this.getPhotosByCityId(params["cityId"])}
     )
     
     
    }

  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe(repsonse => { this.city = repsonse })
  }

  getPhotosByCityId(id: number) {
    this.cityService.getPhotosByCityId(id).subscribe((response) => { this.photos = response})
  }
  
 
}
