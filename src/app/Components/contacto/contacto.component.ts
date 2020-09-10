import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { contactoDataInterface, contactoDataResponseInterface } from '../../Services/contacto/contacto.service';
import { FuncionesService } from '../../Services/funciones/funciones.service';
import { AppState } from '../../Redux/globalState';
import { Store } from '@ngrx/store';
import { setContactoActionStart } from 'src/app/Redux/Actions/contacto/contacto.action';
import { setContactoResponseActionStart } from 'src/app/Redux/Actions/contacto/contactoResponse.action';
import { SharedService } from '../../Services/shared/shared.service';

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit, DoCheck {
	/*propiedades*/
	loading: boolean;
	isLoading: boolean = false;
	generalError: boolean = false;
	generalErrorMsj: string;
	errorClass: Array<string> = [];
	packs: string = "";
	promoCode: string = "";
	packsVal: number = 0;
	promoCodeVal: string = "";
	myForm: FormGroup;
	showC: boolean = false;
	showP: boolean = false;
	//get data
	contactoData: contactoDataInterface[] = [];
	contactoDataResponse: contactoDataResponseInterface[] = [];
	oldLang: string = "";

	constructor(
		private route: ActivatedRoute,
		private fn: FuncionesService,
		private router: Router,
		private store: Store<AppState>,
		private shared: SharedService
	) {
		this.route.params.subscribe(params => {
			this.packs = params['paquete'];
			this.promoCode = params['code'];
		});

		this.store.subscribe((stts: any) => {
			this.loading = stts.contacto.loader;
		});
	}

	ngOnInit() {
		this.store.dispatch(setContactoActionStart());

		this.store.subscribe((stts: any) => {
			let contactoDataAux = stts.contacto.data;
			let loaderAux = stts.contacto.loader;

			if (contactoDataAux.container || contactoDataAux.error) {
				if (contactoDataAux.code === 200) {
					this.loading = loaderAux;
					this.contactoData = contactoDataAux.container;
				} else {
					this.generalError = true;
					this.generalErrorMsj = contactoDataAux.error.errorMsj;
				}
			}
		});

		this.validateForm();

		if (this.packs) {
			this.showC = true;
			this.packsVal = parseInt(this.packs);
			if (this.packsVal >= 1 && this.packsVal <= 4) {
				this.showP = true;
			}
			else {
				this.showP = false;
				this.packsVal = 0;
			}
		} else {
			this.packsVal = 0;
		}

		if(this.promoCode){
			this.promoCodeVal = this.promoCodeVal;
		}else{
			this.promoCodeVal = "-";
		}
	}

	ngDoCheck() {
		/*Cambio de idioma*/
		if (this.oldLang === "") {
			this.oldLang = this.shared.getSelectedLanguage();
		}

		if (this.oldLang !== "" && this.shared.getSelectedLanguage() !== this.oldLang) {
			this.oldLang = this.shared.getSelectedLanguage();
			this.store.dispatch(setContactoActionStart());
		}
	}

	validateForm() {
		this.myForm = new FormGroup(
			{
				"nombre": new FormControl('',
					{
						validators: [Validators.required],
						updateOn: 'blur'
					}),
				"correo": new FormControl('',
					{
						validators: [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)],
						updateOn: 'blur'
					}),
				"telefono": new FormControl('',
					{
						validators: [Validators.required, Validators.pattern(/^((?:(?:[+]?)(?:[0-9]{1,5}|\x28[0-9]{1,5}\x29?)(?:[\s]?))?)([0-9]{4})(?:[-]|[\s]?)([0-9]{4})$/)],
						updateOn: 'blur'
					}),
				"mensaje": new FormControl('',
					{
						validators: [Validators.required],
						updateOn: 'blur'
					})
			}
		);
	}

	saveData() {
		this.isLoading = true;
		let bodyRequest = {
			...this.myForm.value,
			"idPaquete": this.packsVal,
			"promoCode": this.promoCodeVal
		};

		this.store.dispatch(setContactoResponseActionStart({ response: bodyRequest }));

		this.store.subscribe((stts: any) => {
			let contactoResponseDataAux = stts.contactoResponse.response;

			if (contactoResponseDataAux.container || contactoResponseDataAux.error) {
				if (contactoResponseDataAux.code === 200) {
					this.checkError(contactoResponseDataAux.container);
					this.isLoading = false;
				} else {
					if (contactoResponseDataAux.container.statusError === "bcknd") {
						if(contactoResponseDataAux.container.http_response_code){
							this.checkError(contactoResponseDataAux.container.errors);
						}else{
							this.generalError = true;
							this.generalErrorMsj = contactoResponseDataAux.container.errors;
						}
					} else {
						this.generalError = true;
						this.generalErrorMsj = contactoResponseDataAux.error.errorMsj;
					}
				}
			}
		});

		this.resetForm();
	}

	checkError(value: any) {
		const code: number = value[0].http_response_code;
		this.errorClass = this.fn.checkClassError(code);
		this.contactoDataResponse = value;
	}

	gotoHome() {
		this.router.navigate(['/home']);
	}

	resetForm() {
		this.myForm.reset();
	}

	getMsjPack(msj: string){
		const namePack = this.contactoData[0]["contactoContent"].packsName[this.packsVal-1];
		return msj.replace("<PKT>", namePack);
	}

}
