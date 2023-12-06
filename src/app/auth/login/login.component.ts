import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string;

  constructor(public authService : AuthService, public router : Router ) {
    this.setMessage();
  }

  setMessage() { 
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' :' out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();

      console.log('test')

      if(this.authService.isLoggedIn) {
         // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/admin';

          // set our navigation extras object
          // that passes on our global query paramsl and fragment
              const navigationExtras : NavigationExtras = {
            queryParamsHandling : 'preserve',
            preserveFragment : true
       }

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    })
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit(): void {
  }



}
