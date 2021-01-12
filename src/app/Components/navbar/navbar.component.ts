import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LogInService } from '../../Services/logIn/logIn.service';
import LITERALS from '../../Literals/navbar.literals';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() setLanguage: string;
  @Output() reLoadLang: EventEmitter<string> = new EventEmitter();
  states: any;
  isSignIn: boolean = false;
  selectedLanguage: string;
  literals = LITERALS;
  collapsed = true;

  constructor(
    private logIn: LogInService,
    private shared: SharedService
  ) { }

  ngOnInit() {
    if (this.logIn.isSignIn()) {
      this.isSignIn = true;
    }

    this.selectedLanguage = this.shared.getSelectedLanguage();
  }

  ngOnChanges(changes: SimpleChanges) {
    let setLanguage = changes["setLanguage"];

    if (!setLanguage.firstChange && setLanguage.previousValue !== setLanguage.currentValue) {
      this.selectedLanguage = this.shared.getSelectedLanguage();
    }
  }

  setClass(val: any) {
    if (val.subMenu) {
      return "nav-item dropdown";
    } else {
      return "nav-item";
    }
  }

  selectLangClass(lang: string, selectedLanguage: string) {
    if (lang === selectedLanguage) {
      return "checked";
    }
    return false;
  }

  logOut() {
    this.logIn.logOut();
    this.isSignIn = false;
  }

  selectLanguage(lang: string) {
    this.reLoadLang.emit(lang);
  }

  renderLiteralsMenu(element: object, language: string) {
    return element[`${language}`];
  }

}
