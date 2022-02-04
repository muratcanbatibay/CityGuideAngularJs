
import { City } from './../../../../../SehirRehberi/src/app/model/city';

import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/service/city.service';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  constructor( private cityService:CityService,
      private formBuilder:FormBuilder,
     
     
     ) { }

  city!:City;
  cityAddForm!: FormGroup;

  

  ngOnInit(): void {
  this.createCityForm()
  }
  createCityForm(){
    this.cityAddForm= this.formBuilder.group(
      { name:["",Validators.required],
      description:["",Validators.required]
      })
  }

  add(){
    if(this.cityAddForm.valid){

      this.city= Object.assign({},this.cityAddForm.value)
      this.city.userId=1;
      this.cityService.add(this.city);

    
    }
  }    


}
