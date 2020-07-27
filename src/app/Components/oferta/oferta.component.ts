import { Component, OnInit, DoCheck } from '@angular/core';
import { ofertaDataInterface } from '../../Services/oferta/oferta.service';
import { AppState } from '../../Redux/globalReducer';
import { Store } from '@ngrx/store';
import { setOfertaActionStart } from 'src/app/Redux/Actions/oferta/oferta.action';
import { SharedService } from '../../Services/shared/shared.service';
@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	ofertaData: ofertaDataInterface[] = [];
	oldLang: string = "";

	constructor(
		private store: Store<AppState>,
		private shared: SharedService
	) {
		this.store.subscribe((stts: any) => {
			this.loading = stts.oferta.loader;
		});
	}

	ngOnInit() {
		this.store.dispatch(setOfertaActionStart());

		this.store.subscribe((stts: any) => {
			let ofertaDataAux = stts.oferta.data;
			let loaderAux = stts.oferta.loader;

			if (ofertaDataAux.container || ofertaDataAux.error) {
				if (ofertaDataAux.code === 200) {
					this.loading = loaderAux;
					this.ofertaData = ofertaDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = ofertaDataAux.error.errorMsj;
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
			this.store.dispatch(setOfertaActionStart());
		}
	}
}
