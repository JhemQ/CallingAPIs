import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { SignInComponent } from 'src/app/login/sign-in/sign-in.component';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(){
    var accessToken = localStorage.getItem('token');
    if(accessToken != null){
      return true;
    }
    else{
      alert("Please login to gain access")
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
