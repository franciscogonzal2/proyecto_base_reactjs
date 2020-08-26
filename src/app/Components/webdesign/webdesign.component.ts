import { Component, OnInit, DoCheck } from '@angular/core';
import { WebdesignService, webDesignDataInterface } from '../../Services/webdesign/webdesign.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setWebDesignActionStart } from 'src/app/Redux/Actions/webdesign/webdesign.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css']
})
export class WebdesignComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean = true;
	generalError: boolean = false;
	generalErrorMsj: string;

	//get data
	webDesignData: webDesignDataInterface[] = [];
	oldLang: string = "";

	constructor( 
		private webDesignService: WebdesignService,
		private store: Store<AppState>,
		private shared: SharedService
		){
			this.store.subscribe((stts: any) => {
				this.loading = stts.webdesign.loader;
			});
		}

	ngOnInit() {
		this.store.dispatch(setWebDesignActionStart());

		this.store.subscribe((stts: any) => {
			let webDesignDataAux = stts.webdesign.data;
			let loaderAux = stts.webdesign.loader;

			if (webDesignDataAux.container || webDesignDataAux.error) {
				if (webDesignDataAux.code === 200) {
					this.loading = loaderAux;
					this.webDesignData = webDesignDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = webDesignDataAux.error.errorMsj;
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
			this.store.dispatch(setWebDesignActionStart());
		}
	}
}
