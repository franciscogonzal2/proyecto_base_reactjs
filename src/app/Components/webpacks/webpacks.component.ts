import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { webpacksDataInterface } from '../../Services/webpacks/webpacks.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setWebPacksActionStart } from 'src/app/Redux/Actions/webpacks/webpacks.action';
import { SharedService } from '../../Services/shared/shared.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-webpacks',
	templateUrl: './webpacks.component.html',
	styleUrls: ['./webpacks.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class WebpacksComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean;
	generalError: boolean = false;
	generalErrorMsj: string;
	visible: boolean = false;
	//get data
	webPacksData: webpacksDataInterface[] = [];
	oldLang: string = "";
	modalPromoData: object;

	constructor(
		private store: Store<AppState>,
		private shared: SharedService,
		private modalService: NgbModal
	) {
		this.store.subscribe((stts: any) => {
			this.loading = stts.webpacks.loader;
		});
	}

	ngOnInit() {
		this.store.dispatch(setWebPacksActionStart());

		this.store.subscribe((stts: any) => {
			let webPacksDataAux = stts.webpacks.data;
			let loaderAux = stts.webpacks.loader;

			if (webPacksDataAux.container || webPacksDataAux.error) {
				if (webPacksDataAux.code === 200) {
					this.loading = loaderAux;
					this.webPacksData = webPacksDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = webPacksDataAux.error.errorMsj;
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
			this.store.dispatch(setWebPacksActionStart());
		}
	}

	openModalTermsPromo(titulo: string, terms: string) {
		alert(titulo + terms);
	}

	bgHeaderClass(id: number) {
		let headerBgClases = [
			"header",
			id == 1 ? "bg-success" : "",
			id == 2 ? "bg-primary" : "",
			id == 3 ? "bg-secondary" : "",
			id == 4 ? "bg-dark" : "",
		];
		return headerBgClases;
	}

	bgBottonClass(id: number) {
		let headerBtnClases = [
			"btn",
			"btn-lg",
			"btn-block",
			id == 1 ? "btn-success" : "",
			id == 2 ? "btn-primary" : "",
			id == 3 ? "btn-secondary" : "",
			id == 4 ? "btn-dark" : "",
		];
		return headerBtnClases;
	}

	isPromotion(index: number) {
		let promo = this.webPacksData[0]["paquetes"][index - 1].promo;
		if (promo.length > 0) {
			return true;
		}
		return false;
	}

	nPromotion(index: number) {
		let promo = this.webPacksData[0]["paquetes"][index - 1].promo;
		if (promo) {
			return promo.length;
		}
		return 0;
	}

	getSimbol(regularPrice: number) {
		return "$" + this.addCommas(regularPrice);
	}

	addCommas(nStr: number) {
		let n = nStr.toString()
		while (true) {
			var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
			if (n == n2) break
			n = n2
		}
		return n;
	}

	onOpenModal(index: number, content: any) {
		//load data
		this.modalPromoData = [
			{
				titulo: this.webPacksData[0]["webpacksContent"].titulo_promocion,
				data: this.webPacksData[0]["paquetes"][index - 1].promo,
				regularPrice: this.webPacksData[0]["paquetes"][index - 1].precio_regular,
				regularPriceText: this.webPacksData[0]["paquetes"][index - 1].regular_text
			}
		];

		//open NgbModal
		this.modalService.open(content, { size: 'lg', scrollable: false });
	}

	noPack() {
		return this.webPacksData[0]["paquetes"].length > 0;
	}

}