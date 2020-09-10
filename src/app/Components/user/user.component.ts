import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { userDataInterface } from '../../Services/user/user.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setUserActionStart } from 'src/app/Redux/Actions/user/user.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit/*, OnChanges*/ {
  //@Input() isSignIn: boolean;
 //@Output() reLoadMenu: EventEmitter<boolean> = new EventEmitter();

  /*propiedades*/
	loading: boolean;
	generalError: boolean = false;
  generalErrorMsj: string;
  isSignIn: boolean;
  //get data
  userData: userDataInterface[] = [];
	oldLang: string = "";

  constructor(
    private store: Store<AppState>,
		private shared: SharedService
  ) {
    this.store.subscribe((stts: any) => {
			this.loading = stts.user.loader;
		});
  }

  ngOnInit() {
		this.store.dispatch(setUserActionStart());

		this.store.subscribe((stts: any) => {
			let userDataAux = stts.user.data;
			let loaderAux = stts.user.loader;

			if (userDataAux.container || userDataAux.error) {
				if (userDataAux.code === 200) {
					this.loading = loaderAux;
					this.userData = userDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = userDataAux.error.errorMsj;
				}
			}
		});
	}

	ngDoCheck() {
		/*Cambio de idioma*/
		if (this.oldLang === "") {
			this.oldLang = this.shared.getSelectedLanguage();
		}

		if (this.oldLang !== "" && this.shared.getSelectedLanguage() !== this.oldLang) {
			this.oldLang = this.shared.getSelectedLanguage();
			this.store.dispatch(setUserActionStart());
		}
	}

}
