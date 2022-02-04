import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  loginForm!:FormGroup;

  ngOnInit(): void {

    this.createLoginForm()

  }


  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
  }




}
