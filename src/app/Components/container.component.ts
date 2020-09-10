import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { setLanguageAction } from '../Redux/Actions/app/language.action';
import { AppState } from '../Redux/globalState';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [
  ],
})
export class ContainerComponent implements OnInit{
  actualView: string = "";
  setLanguage: string = "esp";
  
  constructor(
    private location: Location,
    private store: Store<AppState>,
    private cookies: CookieService,
  ){}

  ngOnInit(){
    //init setLanguageAction
    const isLang = this.cookies.check("dsw-lang");
    if (isLang) {
      this.setLanguage = this.cookies.get("dsw-lang");
    }else{
      this.cookies.set("dsw-lang", this.setLanguage );
    }

    this.store.dispatch(setLanguageAction( { lenguaje: this.setLanguage } ) );

    //gototop
    if(this.location.path() != ""){
      this.actualView = this.location.path();
    } else {
      this.actualView = 'home';
    }
  }

  reLoadLang( newLang: string ){
    this.setLanguage = newLang;
    this.store.dispatch(setLanguageAction( { lenguaje: newLang } ) );
    this.cookies.set("dsw-lang", newLang );
  }

}
