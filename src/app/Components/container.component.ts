import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { setLanguageAction } from '../Redux/Actions/app/app.action';
import { AppState } from '../Redux/Interfaces/states.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [
  ],
})
export class ContainerComponent implements OnInit {
  href: string = "";
  renderMenu: boolean = true;
  language: string;
  
  constructor(
    private location: Location,
    private store: Store<AppState>
  ){
    //init setLanguageAction()
    this.store.dispatch(setLanguageAction({ language: 'esp' }));

    if(this.location.path() != ""){
      this.href = this.location.path();
    } else {
      this.href = 'home';
    }
  }

  ngOnInit(): void { 
    this.store.subscribe( state => {
      this.language= state.app.language;
    })
  }

  reLoadMenu(flag: boolean){
    this.renderMenu = flag;
  }

  reLoadLang( newLang: string ){
    this.language = newLang;
    this.store.dispatch(setLanguageAction({ language: newLang }));
  }

}
