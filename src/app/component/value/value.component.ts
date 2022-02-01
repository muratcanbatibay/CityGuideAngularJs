import { ActivatedRoute } from '@angular/router';
import { CityService } from './../../service/city.service';
import { City } from './../../../../../SehirRehberi/src/app/model/city';
import { Value } from './../../model/value';
import { ValueService } from './../../service/value.service';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { Photo } from 'src/app/model/photo';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] = []
  galleryImages: NgxGalleryImage[] = []
  constructor(private valuesService: ValueService,
    private cityService: CityService,
    private activatedRoute:ActivatedRoute) { }
  values: Value[] = [];
  city!: City
  photos: Photo[] = []

  ngOnInit(): void {
   this.getValue()
   
  }

  getValue() {
    return this.valuesService.getValues().subscribe(response => { this.values = response })

  }

  getPhotosByCity(id: number) {
    return this.cityService.getPhotosByCityId(id).subscribe(res => { this.photos = res
    this.setGallery();
    })
    
  }

  getImages() {
    const imgUrl = []
    for (let i = 0; i < this.city.photos.length; i++) {
      imgUrl.push({
        small: this.city.photos[i].url,
        medium: this.city.photos[i].url,
        big: this.city.photos[i].url
      })
    }
    return imgUrl
  }
   
  setGallery(){
    this.galleryOptions = [
      {
        width: '100%',

        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
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
        preview: false
      }
    ];

    this.galleryImages= this.getImages()


  }
}
