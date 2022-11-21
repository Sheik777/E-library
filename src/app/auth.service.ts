import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  user:boolean = false
  loggedin(){
    let UserName = localStorage.getItem('username');
    if (UserName == 'sheik') {
      this.user = true;
      return true;
      
    } else {
      this.user = false;
      return false
    }
  }
}
