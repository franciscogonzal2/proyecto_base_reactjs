import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogInService } from '../../Services/logIn/logIn.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  constructor( 
    private logIn: LogInService,
    private route: Router ){}
  
  canActivate(): boolean {
    if(this.logIn.isSingIn()){
      return true;
    }else { 
      this.route.navigateByUrl('/logIn');
      return false;
    }
  }
  
}
