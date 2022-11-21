import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryGuard implements CanActivate {
  constructor(private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    route: Router;
    let username = localStorage.getItem("username");
    if (username == 'sheik') {
      // this.route.navigateByUrl('/home')
      return true;
    }
    else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }

}
