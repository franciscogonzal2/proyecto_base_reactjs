import { Component, OnInit, DoCheck } from '@angular/core';
import { responsiveDataInterface } from '../../Services/responsive/responsive.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setResponsiveActionStart } from 'src/app/Redux/Actions/responsive/responsive.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	responsiveData: responsiveDataInterface[] = [];
	oldLang: string = "";

	constructor(
		private store: Store<AppState>,
		private shared: SharedService
	) {
		this.store.subscribe((stts: any) => {
			this.loading = stts.responsive.loader;
		});
	}
	
	ngOnInit() {
		this.store.dispatch(setResponsiveActionStart());

		this.store.subscribe((stts: any) => {
			let responsiveDataAux = stts.responsive.data;
			let loaderAux = stts.responsive.loader;

			if (responsiveDataAux.container || responsiveDataAux.error) {
				if (responsiveDataAux.code === 200) {
					this.loading = loaderAux;
					this.responsiveData = responsiveDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = responsiveDataAux.error.errorMsj;
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
			this.store.dispatch(setResponsiveActionStart());
		}
	}
}

