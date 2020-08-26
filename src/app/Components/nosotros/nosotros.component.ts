import { Component, OnInit, DoCheck } from '@angular/core';
import { nosotrosDataInterface } from '../../Services/nosotros/nosotros.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setNosotrosActionStart } from 'src/app/Redux/Actions/nosotros/nosotros.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
	selector: 'app-nosotros',
	templateUrl: './nosotros.component.html',
	styleUrls: ['./nosotros.component.css']
})

export class NosotrosComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean;
	generalError: boolean = false;
	generalErrorMsj: string;
	//get data
	nosotrosData: nosotrosDataInterface[] = [];
	oldLang: string = "";

	constructor(
		private store: Store<AppState>,
		private shared: SharedService
	) {
		this.store.subscribe((stts: any) => {
			this.loading = stts.nosotros.loader;
		});
	}

	ngOnInit() {
		this.store.dispatch(setNosotrosActionStart());

		this.store.subscribe((stts: any) => {
			let nosotrosDataAux = stts.nosotros.data;
			let loaderAux = stts.nosotros.loader;

			if (nosotrosDataAux.container || nosotrosDataAux.error) {
				if (nosotrosDataAux.code === 200) {
					this.loading = loaderAux;
					this.nosotrosData = nosotrosDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = nosotrosDataAux.error.errorMsj;
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
			this.store.dispatch(setNosotrosActionStart());
		}
	}
}
