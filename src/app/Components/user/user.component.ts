import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { LogInService } from "../../Services/logIn/logIn.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit/*, OnChanges*/ {
  //@Input() isSignIn: boolean;
 //@Output() reLoadMenu: EventEmitter<boolean> = new EventEmitter();

  /*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
  generalErrorMsj: string;
  isSignIn: boolean;

  constructor(
    private logIn: LogInService
  ) {}

  ngOnInit(){
    //this.isSignIn = this.logIn.isSignIn()
  }

  /*ngOnChanges(changes: SimpleChanges) {
    let isSignIn = changes["isSignIn"];

    if( !isSignIn.firstChange && isSignIn.previousValue !== isSignIn.currentValue ){
      this.reLoadMenu.emit(true);
    }

  }*/

}
