import { Component, OnInit, DoCheck } from '@angular/core';
import { homeDataInterface } from '../../Services/home/home.service';
import { Router } from '@angular/router';
import { LogInService } from '../../Services/logIn/logIn.service';
import { SharedService } from '../../Services/shared/shared.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setHomeActionStart } from 'src/app/Redux/Actions/home/home.action';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	homeData: homeDataInterface[] = [];
	oldLang: string = "";

	constructor(
		private logIn: LogInService,
		private route: Router,
		private store: Store<AppState>,
		private shared: SharedService
	) {
		this.store.subscribe((stts: any) => {
			this.loading = stts.home.loader;
		});
	}

	ngOnInit() {
		//estoy logueado?
		if (this.logIn.isSignIn()) {
			this.route.navigateByUrl('/user');
		}

		this.store.dispatch(setHomeActionStart());

		this.store.subscribe((stts: any) => {
			let homeDataAux = stts.home.data;
			let loaderAux = stts.home.loader;

			if (homeDataAux.container || homeDataAux.error) {
				if (homeDataAux.code === 200) {
					this.loading = loaderAux;
					this.homeData = homeDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = homeDataAux.error.errorMsj;
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
			this.store.dispatch(setHomeActionStart());
		}
	}
}
