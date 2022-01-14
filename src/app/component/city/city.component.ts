import { CityService } from './../../service/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city';
import { Photo } from 'src/app/model/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],

})
export class CityComponent implements OnInit {

  constructor(private cityService: CityService) { }
  cities: City[] = [];
  photos: Photo[] = [];
  ngOnInit(): void {
    this.getCities();

  }

  getCities() {
    this.cityService.getCities().subscribe(response => { this.cities = response })
  }




}
