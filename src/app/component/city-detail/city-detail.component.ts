import { Photo } from './../../model/photo';
import { CityService } from './../../service/city.service';
import { City } from './../../model/city';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';



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
  photos: Photo[] = []
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"]),
      this.getPhotosByCityId(params["cityId"])

    })

  }

  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe(repsonse => { this.city = repsonse })
  }

  getPhotosByCityId(cityId: number) {
    this.cityService.getPhotosByCityId(cityId).subscribe(response => {
      this.photos = response
      this.setGallery();})

  }

  getImages() {
    const imgUrl = []
    for (let i = 0; i < this.city.photos.length; i++) {
      imgUrl.push(
        {
          small: this.city.photos[i].url,
          medium: this.city.photos[i].url,
          big: this.city.photos[i].url
        }
      )
    }
    return imgUrl;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
    ];

    this.galleryImages = this.getImages();

  }
}
