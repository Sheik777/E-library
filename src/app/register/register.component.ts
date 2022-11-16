import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

signup=new FormGroup({

  firstname: new FormControl('', [Validators.required,]),
  lastname: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
 Conpassword: new FormControl('', [Validators.required]),

})

  constructor() { }

  ngOnInit(): void {
  }

 reg(){
  console.log(this.signup.value);
  
 }
 
 

}
