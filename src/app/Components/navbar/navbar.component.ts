import { Component, Input, Output,EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogInService } from '../../Services/logIn/logIn.service';
import LITERALS from '../../Literals/navbar.literals';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../Redux/globalReducer';
//import { LanguageSelector } from '../../Redux/Selectors/app.selectors'; 
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges{
  @Input() renderMenu: boolean;
  @Input() setLanguage: string;
  @Output() reLoadMenu: EventEmitter<boolean> = new EventEmitter();
  @Output() reLoadLang: EventEmitter<string> = new EventEmitter();
  states: any;
  isSignIn: boolean = false;
  //selectedLanguage$: Observable<string>;
  selectedLanguage: string;

  //menu
  literals = LITERALS;

  
  constructor( 
    private logIn: LogInService,
    private store: Store<AppState>
  ){}

  ngOnInit() {
    if( this.logIn.isSignIn() ){
			this.isSignIn = true;
    }

    //this.selectedLanguage$ = this.store.pipe(select(LanguageSelector));
    
    this.store.subscribe( stts => {
      this.selectedLanguage = stts.lngg.language;
    })
  }

  ngOnChanges( changes: SimpleChanges){
    let setLanguage = changes["setLanguage"];
    
    if( !setLanguage.firstChange && setLanguage.previousValue !== setLanguage.currentValue ){
      this.store.subscribe( stts => {
        this.selectedLanguage = stts.lngg.language;
      });
    }
  }

  setClass(val){
    if(val.subMenu){
      return "nav-item dropdown";
    }else {
      return "nav-item";
    }
  }

  logOut(){
    this.logIn.logOut();
    this.isSignIn = false;
  }

  selectLanguage(lang: string){
    this.reLoadLang.emit(lang);
  }

  renderLiteralsMenu(element: object, language: string){
    return element[ `${language}` ];
  }

}
