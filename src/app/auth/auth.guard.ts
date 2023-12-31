import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, NavigationExtras, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    
    const url : string = state.url; 

    console.log('ini url auth', url);

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn) { 
      

      return true }


    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url; 

    // Create a dummy session id
    const sessionId = 123456789;

     // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id : sessionId},
      fragment: 'anchor'
    }


    //Redirect to tne login page with extras
    this.router.navigate(['/login'], navigationExtras)
    return false;

  }

  canLoad (route : Route) : boolean {
    const url = `/${route.path}`;

    return this.checkLogin(url)
  }
  
}
