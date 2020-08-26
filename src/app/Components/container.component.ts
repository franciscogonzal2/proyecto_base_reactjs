import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { setLanguageAction } from '../Redux/Actions/app/language.action';
import { AppState } from '../Redux/globalState';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [
  ],
})
export class ContainerComponent implements OnInit{
  href: string = "";
  setLanguage: string;
  
  constructor(
    private location: Location,
    private store: Store<AppState>
  ){
    //init setLanguageAction
    this.store.dispatch(setLanguageAction( { lenguaje: 'esp' } ) );

    if(this.location.path() != ""){
      this.href = this.location.path();
    } else {
      this.href = 'home';
    }
  }
  ngOnInit(): void { }

  reLoadLang( newLang: string ){
    this.setLanguage = newLang;
    this.store.dispatch(setLanguageAction( { lenguaje: newLang } ) );
  }

}
