import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { footerDataInterface } from '../../Services/footer/footer.service';
import { LogInService } from '../../Services/logIn/logIn.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setFooterActionStart } from 'src/app/Redux/Actions/footer/footer.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {
	@Input() language: string;
	@Input() gototopView: string;
	/*propiedades*/
	loading: boolean = true;
	isSignIn: boolean = false;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	footerData: footerDataInterface[] = [];
	oldLang: string = "";

	constructor(
		private store: Store<AppState>,
		private shared: SharedService,
		private logIn: LogInService
	) {
		/*this.store.subscribe((stts: any) => {
		  this.loading = stts.footer.loader;
		});*/
	}

	ngOnInit() {
		if (this.logIn.isSignIn()) {
			this.isSignIn = true;
		}

		this.store.dispatch(setFooterActionStart());

		this.store.subscribe((stts: any) => {
			let footerDataAux = stts.footer.data;
			//let loaderAux = stts.footer.loader;

			if (footerDataAux.container || footerDataAux.error) {
				if (footerDataAux.code === 200) {
					//this.loading = loaderAux;
					this.footerData = footerDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = footerDataAux.error.errorMsj;
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
			this.store.dispatch(setFooterActionStart());
		}
	}

	logOut() {
		this.logIn.logOut();
		this.isSignIn = false;
	}

	creacionEmpresa(text:string){
		let date = new Date();
		return text + date.getFullYear()
	}
}
