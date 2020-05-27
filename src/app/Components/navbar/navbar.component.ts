import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { LogInService } from '../../Services/logIn/logIn.service';
import LITERALS from '../../Literals/navbar.literals';

import { Store, select } from '@ngrx/store';
import { setLanguageAction } from '../../Redux/Actions/app/app.action';
import { AppState } from '../../Redux/Interfaces/states.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() renderMenu: boolean;
  @Output() reLoadMenu: EventEmitter<boolean> = new EventEmitter();
  @Output() reLoadLang: EventEmitter<string> = new EventEmitter();
  states: any;
  isSignIn: boolean = false;
  selectedLanguage: string;
  //menu
  nosotros: string;
  empresa: string;
  
  constructor( 
    private logIn: LogInService,
    private store: Store<AppState>
  ){}

  ngOnInit() {
    if( this.logIn.isSignIn() ){
			this.isSignIn = true;
    }

    this.store.subscribe( state => {
      this.selectedLanguage = state.app.language;
    })

    this.nosotros = LITERALS.nosotros[ `${this.selectedLanguage}` ];
    this.empresa = LITERALS.empresa[ `${this.selectedLanguage}` ];
  }


  logOut(){
    this.logIn.logOut();
    this.isSignIn = false;
  }

  setLanguage(lang: string){
    this.reLoadLang.emit(lang);
  }

}
