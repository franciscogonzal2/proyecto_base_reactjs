import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LogInService } from '../../Services/logIn/logIn.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSignIn: boolean;
  constructor( 
    private logIn: LogInService,
    private route: Router ){

      this.isSignIn = this.logIn.isSignIn();
    }

    logOut(){
      this.logIn.logOut();
      this.route.navigateByUrl('/home');
    }  
}
