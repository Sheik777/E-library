
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginfrm = new FormGroup({

    username: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required]),

  })
  useronvalid: boolean = false
  

  constructor(private logAdmin: Router) { }
  
  ngOnInit(): void {
  }
  login() {
    console.log(this.loginfrm.value);
  
    if (this.loginfrm.controls.username.value != 'sheik' || this.loginfrm.controls.password.value != 'sheik123') {
      this.useronvalid = true

    }
    else {
      this.useronvalid = false;
      localStorage.setItem('username', this.loginfrm.controls.username.value);
      this.logAdmin.navigateByUrl('/addbook')
    }

  }
}
